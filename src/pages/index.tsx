import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <Head>
        <title>Roundest Pokemon</title>
      </Head>

      <div className="text-2xl text-center pt-8 m-2">Which Pokémon is Rounder?</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200"></div>
        <div className="p-8">vs</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>
    </div>
  )
}
