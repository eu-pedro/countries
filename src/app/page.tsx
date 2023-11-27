import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="w-full py-4 bg-white p">
        <div className="pl-[20rem] flex items-center gap-3">
          <Image src="/globe.svg" width={55} height={55} alt="icon of globe" />
          <h1>Países do mundo</h1>
        </div>
      </header>
      <main className="w-full h-screen bg-gray-500">
        <div className="max-w-[879px] m-auto py-3 grid grid-cols-3 gap-y-6">
          <Link href={`/country/1`}>
            <div className="bg-white max-w-[241px] rounded-lg items-center flex flex-col py-3">
              <Image
                src="/germany.svg"
                alt="germany"
                width={218}
                height={131}
              />
              <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
            </div>
          </Link>

          <div className="bg-white max-w-[241px] rounded-lg items-center flex flex-col py-3">
            <Image src="/germany.svg" alt="germany" width={218} height={131} />
            <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
          </div>

          <div className="bg-white max-w-[241px] rounded-lg items-center flex flex-col py-3">
            <Image src="/germany.svg" alt="germany" width={218} height={131} />
            <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
          </div>

          <div className="bg-white max-w-[241px] rounded-lg items-center flex flex-col py-3">
            <Image src="/germany.svg" alt="germany" width={218} height={131} />
            <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
          </div>
        </div>
      </main>
    </>
  )
}
