import Image from 'next/image'
import { Building, Map, MoveLeft, Speech, UsersRound } from 'lucide-react'
import Link from 'next/link'

export default async function CountryPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <>
      <header className="w-full py-4 bg-white p">
        <div className="pl-[20rem] flex items-center gap-3">
          <Image src="/globe.svg" width={55} height={55} alt="icon of globe" />
          <h1>Países do mundo</h1>
        </div>
      </header>
      <main className="w-full min-h-full bg-gray-500 py-5 ">
        <div className="max-w-[879px] m-auto py-3">
          <h1 className="text-center text-[54px]">Alemanha</h1>
          <Link href="/">
            <span className="flex gap-3 items-center text-white">
              <MoveLeft width={20} color="black" /> Voltar
            </span>
          </Link>

          <div className="bg-white w-full px-[58px] py-10 flex justify-between ">
            <div className="flex flex-col gap-5">
              <div className="flex gap-0.5">
                <Building width={20} />
                <strong>Capital:</strong>
                Berlin
              </div>

              <div className="flex gap-0.5">
                <Map width={20} />
                <strong>Continente:</strong>
                Europe
              </div>

              <div className="flex gap-0.5">
                <UsersRound width={20} />
                <strong>População:</strong>
                83.2M
              </div>

              <div>
                <div className="flex gap-0.5">
                  <Speech width={20} />
                  <strong>Línguas faladas:</strong>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="w-[60px] h-5 rounded-3xl bg-purple-600 flex items-center justify-center ">
                    <span className="text-white text-xs">Germany</span>
                  </div>
                  <div className="w-[60px] h-5 rounded-3xl bg-purple-600 flex items-center justify-center ">
                    <span className="text-white text-xs">Germany</span>
                  </div>
                  <div className="w-[60px] h-5 rounded-3xl bg-purple-600 flex items-center justify-center ">
                    <span className="text-white text-xs">Germany</span>
                  </div>
                  <div className="w-[60px] h-5 rounded-3xl bg-purple-600 flex items-center justify-center ">
                    <span className="text-white text-xs">Germany</span>
                  </div>
                </div>
              </div>
            </div>

            <Image src="/germany.svg" width={400} height={200} alt="" />
          </div>

          <h2 className="text-3xl my-5">Países que fazem fronteira</h2>
          <div className="w-full m-auto py-3 grid grid-cols-3 gap-6">
            <Link href={`/country/2`}>
              <div className="bg-white rounded-lg items-center flex flex-col py-3 place-items-center">
                <Image
                  src="/germany.svg"
                  alt="germany"
                  width={218}
                  height={131}
                />
                <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
              </div>
            </Link>
            <div className="bg-white rounded-lg items-center flex flex-col py-3">
              <Image
                src="/germany.svg"
                alt="germany"
                width={218}
                height={131}
              />
              <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
            </div>
            <div className="bg-white rounded-lg items-center flex flex-col py-3">
              <Image
                src="/germany.svg"
                alt="germany"
                width={218}
                height={131}
              />
              <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
            </div>
            <div className="bg-white rounded-lg items-center flex flex-col py-3">
              <Image
                src="/germany.svg"
                alt="germany"
                width={218}
                height={131}
              />
              <p className="text-center pt-2 text-zinc-900 font-">Alemanha</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
