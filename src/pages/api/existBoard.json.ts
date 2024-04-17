import type { APIRoute } from 'astro'
import sql from '../../db/connection'
export const GET: APIRoute = async ({ params, request }) => {
    try {
        const boardId = await request.json();
        const query = await sql`SELECT * FROM boards WHERE id=${boardId}`
        if (query.count == 0) return new Response(JSON.stringify({ message: 'INTERNAL SERVER ERROR' }), { status: 500 })
        return new Response(JSON.stringify({message:'se hizo'}), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }

}