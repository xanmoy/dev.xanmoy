import React from 'react'
import Image from 'next/image'
const notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Image src="/404.svg" width={300} height={300} /> */}
          <h1 className="lg:text-5xl text-white font-bold md:text-3xl sm:text-3xl text-2xl mb-7"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              404. {" "}
          </span>That’s an error.</h1>
    </div>
  )
}

export default notfound
