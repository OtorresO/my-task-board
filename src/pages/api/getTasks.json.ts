import type { APIRoute } from "astro"
import sql from '../../db/connection'

export const POST: APIRoute = async ({ params, request }) => {
    try {
        const data = await request.json()
        const listStatus = await sql`select id,name,code from status_task`
        const tasks = await sql`SELECT tk.id,tk.name, tk.description, tk.icon_id,ic.value as icon, st.code,tk.status_id FROM tasks AS tk 
        JOIN status_task AS st ON tk.status_id = st.id 
        JOIN icons as ic ON tk.icon_id=ic.id
        JOIN boards AS bd ON tk.board_id = bd.id
        WHERE bd.id=${data.boardId};`
        const icons = await sql`SELECT id,value FROM icons`
        return new Response(JSON.stringify({ listStatus, tasks,icons }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }

}
