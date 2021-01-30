import React from "react"
import image from "../image.jpg"

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="colors"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-blue-1000 font-bold cursive leading-none lg:leading-snug">
          HELLO WORLD. I'M SUNNY.
        </h1>
      </section>
    </main>
  )
}

export default Home
