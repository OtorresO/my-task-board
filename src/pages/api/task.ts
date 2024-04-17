import type { APIRoute } from 'astro'
import sql from '../../db/connection'


export const POST: APIRoute = async ({ params, request }) => {
    try {
        const task = await request.json()
        if (task.name == '') return new Response(null,{ status: 400,statusText:'The field name is required'})
        const query = await sql`INSERT INTO tasks ${sql(task, 'name', 'description', 'icon_id', 'board_id', 'status_id')} returning *`
        if (query.count === 0) return new Response(null, { status: 500,statusText:"The task can't be saved try again" })
        return new Response(JSON.stringify({ message: 'The task has been saved!!', task }), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Hubo un error en el servidor.' }), { status: 500 })
    }


}



export const PUT: APIRoute = async ({ params, request }) => {
    try {
        const task = await request.json()
        const queryCurrentTask = await sql`SELECT * FROM tasks WHERE id=${task.id}`
        if (queryCurrentTask.count === 0) return new Response(JSON.stringify({ message: 'Task not founded' }), { status: 404 })
        if (task.name == '') return new Response(JSON.stringify({ message: 'The field name is required' }), { status: 400 })
        const updateTask = await sql` update tasks set ${sql(task, 'name', 'description', 'icon_id', 'board_id', 'status_id')} where id= ${task.id}`
        if (updateTask.count === 0) return new Response(JSON.stringify({ message: "The task can't be updated try again" }), { status: 500 })
        return new Response(JSON.stringify({ message: 'The task has been updated!!', task }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }


}

export const DELETE: APIRoute = async ({ params, request }) => {
    try {
        const id = await request.json()
        const queryCurrentTask = await sql`SELECT * FROM tasks WHERE id=${id}`
        if (queryCurrentTask.count === 0) return new Response(JSON.stringify({ message: 'Task not founded' }), { status: 404 })
        const query = await sql`DELETE from tasks where id=${id}`
        if (query.count === 0) return new Response(JSON.stringify({ message: "The task can't be deleted try again" }), { status: 500 })
        return new Response(JSON.stringify({ message: 'The task has been deleted!!' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}