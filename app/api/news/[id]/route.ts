import { NextResponse } from "next/server";

export async function GET(
    request: Request, 
    { params }: any
) {

    const {id} = await params;

    if (!id) {
        return NextResponse.json({message: "News not found"}, { status: 451 })
    }

    return NextResponse.json({message: "News found"})
}