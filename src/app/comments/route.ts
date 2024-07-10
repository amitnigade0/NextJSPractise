
import {Comments} from './data'

export async function GET() {
    return Response.json(Comments)
}

export async function POST(request: Request) {
    const req = await request.json();
    const newComment = { 
        id: Comments.length + 1,
        comment: req.comment
     }
     Comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        status: 201
    })
    return 'success'
}