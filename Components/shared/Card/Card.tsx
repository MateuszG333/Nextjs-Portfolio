type CardProps = {
  title: string
  body: string
}

export default function Card({ title, body }: CardProps) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-6
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-blue-500/20
      "
    >
      {/* Gradient glow background */}
      <div className="
        absolute inset-0 -z-10 opacity-0
        bg-linear-to-br from-blue-500/20 to-purple-500/20
        blur-2xl
        transition-opacity duration-500
        group-hover:opacity-100
      " />

      {/* Accent top bar */}
      <div className="
        absolute top-0 left-0 h-1 w-full
        bg-linear-to-r from-blue-500 to-purple-500
        scale-x-0 origin-left
        transition-transform duration-500
        group-hover:scale-x-100
      " />

      <h2 className="
        text-xl font-semibold text-white
        mb-3
        transition-colors duration-300
        group-hover:text-blue-400
      ">
        {title}
      </h2>

      <p className="
        text-gray-400 leading-relaxed
        transition-colors duration-300
        group-hover:text-gray-300
      ">
        {body}
      </p>
    </div>
  )
}