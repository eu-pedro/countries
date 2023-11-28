import Image from 'next/image'
import Link from 'next/link'

async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      cache: 'force-cache',
    })

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`)
    }

    const countries = await response.json()

    return countries
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const countries = await fetchCountries()
  const first9Countries = countries.slice(0, 9)
  return (
    <>
      <header className="w-full py-4 bg-white p">
        <div className="pl-[20rem] flex items-center gap-3">
          <Image src="/globe.svg" width={55} height={55} alt="icon of globe" />
          <h1>Países do mundo</h1>
        </div>
      </header>
      <main className="w-full h-full bg-gray-500">
        <div className="max-w-[879px] m-auto py-3 grid grid-cols-3 gap-y-6">
          {first9Countries.map((country: any) => (
            <>
              <Link href={`/v3.1/alpha/${country.ccn3}`}>
                <div className="bg-white max-w-[241px] rounded-lg items-center flex flex-col py-3">
                  <Image
                    src={country.flags.svg}
                    alt="germany"
                    width={218}
                    height={131}
                  />
                  <p className="text-center pt-2 text-zinc-900 font-">
                    {country.translations.por.official}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </main>
    </>
  )
}
