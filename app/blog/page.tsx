"use client"

import { useEffect, useState } from "react"
import Card from "@/Components/shared/Card/Card"

type News = {
  id: number
  title: string
  body: string
}

export default function Blog() {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    fetch("/api/news")
      .then((response) => response.json())
      .then(setNews)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Blog
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Najnowsze wpisy i aktualności. Inspiracje, wiedza i praktyczne wskazówki.
          </p>

          <div className="mt-6 h-0.5 w-24 mx-auto bg-liear-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Content */}
        {news.length === 0 ? (
          <div className="flex justify-center items-center py-20 text-gray-500 animate-pulse">
            Ładowanie wpisów...
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <Card
                key={n.id}
                title={n.title}
                body={n.body}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}