import { NextResponse } from "next/server"


export async function GET() {
    const news = [
        { id: 1, title: "Rzeszów to bardzo fajne miasto", body: "Poznaj wiele ciekawych miejsc w Rzeszowie"},
        { id: 2, title: "Trwa szkolenie", body: "Z technologi JS"},
        { id: 3, title: "Dziś jest piękna pogoda", body: "Jest super!"},
    ]

    return NextResponse.json(news);
}

export async function POST(request: Request) {
    const body = await request.json();
    // TODO: ADD NEWS TO DB

    return NextResponse.json({ received: body})
}