import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image';

import { useSpring, a } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'

import bgImage from '../public/images/bg.jpg'

import anouck01 from '../public/images/anouck-01-r.jpg'
import anouck03 from '../public/images/anouck-03-r.jpg'
import anouck05 from '../public/images/anouck-05-r.jpg'
import anouck07 from '../public/images/anouck-07-r.jpg'
import anouck09 from '../public/images/anouck-09-r.jpg'
import anouck11 from '../public/images/anouck-11-r.jpg'
import anouck13 from '../public/images/anouck-13-r.jpg'
import anouck15 from '../public/images/anouck-15-r.jpg'
import anouck17 from '../public/images/anouck-17-r.jpg'
import anouck19 from '../public/images/anouck-19-r.jpg'
import anouck21 from '../public/images/anouck-21-r.jpg'
import anouck23 from '../public/images/anouck-23-r.jpg'
import anouck25 from '../public/images/anouck-25-r.jpg'
import anouck27 from '../public/images/anouck-27-r.jpg'
import anouck29 from '../public/images/anouck-29-r.jpg'
import anouck31 from '../public/images/anouck-31-r.jpg'
import anouck33 from '../public/images/anouck-33-r.jpg'
import anouck35 from '../public/images/anouck-35-r.jpg'
import anouck37 from '../public/images/anouck-37-r.jpg'
import anouck39 from '../public/images/anouck-39-r.jpg'
import anouck41 from '../public/images/anouck-41-r.jpg'
import anouck43 from '../public/images/anouck-43-r.jpg'
import anouck45 from '../public/images/anouck-45-r.jpg'
import anouck47 from '../public/images/anouck-47-r.jpg'
import anouck49 from '../public/images/anouck-49-r.jpg'
import anouck51 from '../public/images/anouck-51-r.jpg'
import anouck53 from '../public/images/anouck-53-r.jpg'
import anouck55 from '../public/images/anouck-55-r.jpg'
import anouck57 from '../public/images/anouck-57-r.jpg'
import anouck59 from '../public/images/anouck-59-r.jpg'
import anouck61 from '../public/images/anouck-61-r.jpg'
import anouck63 from '../public/images/anouck-63-r.jpg'
import anouck65 from '../public/images/anouck-65-r.jpg'
import anouck67 from '../public/images/anouck-67-r.jpg'

import florent02 from '../public/images/florent-02-r.jpg'
import florent04 from '../public/images/florent-04-r.jpg'
import florent06 from '../public/images/florent-06-r.jpg'
import florent08 from '../public/images/florent-08-r.jpg'
import florent10 from '../public/images/florent-10-r.jpg'
import florent12 from '../public/images/florent-12-r.jpg'
import florent14 from '../public/images/florent-14-r.jpg'
import florent16 from '../public/images/florent-16-r.jpg'
import florent18 from '../public/images/florent-18-r.jpg'
import florent20 from '../public/images/florent-20-r.jpg'
import florent22 from '../public/images/florent-22-r.jpg'
import florent24 from '../public/images/florent-24-r.jpg'
import florent26 from '../public/images/florent-26-r.jpg'
import florent28 from '../public/images/florent-28-r.jpg'
import florent30 from '../public/images/florent-30-r.jpg'
import florent32 from '../public/images/florent-32-r.jpg'
import florent34 from '../public/images/florent-34-r.jpg'
import florent36 from '../public/images/florent-36-r.jpg'
import florent38 from '../public/images/florent-38-r.jpg'
import florent40 from '../public/images/florent-40-r.jpg'
import florent42 from '../public/images/florent-42-r.jpg'
import florent44 from '../public/images/florent-44-r.jpg'
import florent46 from '../public/images/florent-46-r.jpg'
import florent48 from '../public/images/florent-48-r.jpg'
import florent50 from '../public/images/florent-50-r.jpg'
import florent52 from '../public/images/florent-52-r.jpg'
import florent54 from '../public/images/florent-54-r.jpg'
import florent56 from '../public/images/florent-56-r.jpg'
import florent58 from '../public/images/florent-58-r.jpg'
import florent68 from '../public/images/florent-68-r.jpg'
import florent69 from '../public/images/florent-69-r.jpg'
import florent71 from '../public/images/florent-71-r.jpg'
import florent73 from '../public/images/florent-73-r.jpg'
import florent75 from '../public/images/florent-75-r.jpg'
import florent80 from '../public/images/florent-80-r.jpg'
import florent81 from '../public/images/florent-81-r.jpg'

import Stack from '@/components/Stack'

interface Card {
  width: number
  height: number
  ratio: number
  rand: number
  index: number
  image: StaticImageData,
  name: string
  person: string
  oi: number
}

const Home: NextPage = () => {

  const cards: Card[] = [
    { width: 3413, height: 2560, image: anouck01, person: 'anouck', oi: 1 },
    { width: 2560, height: 3413, image: florent02, person: 'florent', oi: 1 },
    { width: 3829, height: 2560, image: anouck03, person: 'anouck', oi: 2 },
    { width: 3413, height: 2560, image: anouck05, person: 'anouck', oi: 3 },
    { width: 3413, height: 2560, image: anouck07, person: 'anouck', oi: 4 },
    { width: 2560, height: 3413, image: florent04, person: 'florent', oi: 2 },
    { width: 2560, height: 3413, image: florent06, person: 'florent', oi: 3 },
    { width: 2560, height: 3413, image: anouck09, person: 'anouck', oi: 5 },
    { width: 3413, height: 2560, image: florent08, person: 'florent', oi: 4 },
    { width: 3413, height: 2560, image: anouck11, person: 'anouck', oi: 6 },
    { width: 2560, height: 3413, image: florent10, person: 'florent', oi: 5 },
    { width: 3413, height: 2560, image: anouck13, person: 'anouck', oi: 7 },
    { width: 3413, height: 2560, image: florent12, person: 'florent', oi: 6 },
    { width: 2560, height: 3413, image: florent14, person: 'florent', oi: 7 },
    { width: 3413, height: 2560, image: anouck15, person: 'anouck', oi: 8 },
    { width: 3413, height: 2560, image: florent16, person: 'florent', oi: 8 },
    { width: 3820, height: 2560, image: anouck17, person: 'anouck', oi: 9 },
    { width: 3413, height: 2560, image: florent18, person: 'florent', oi: 9 },
    { width: 2560, height: 3413, image: florent20, person: 'florent', oi: 10 },
    { width: 3854, height: 2560, image: anouck19, person: 'anouck', oi: 10 },
    { width: 3413, height: 2560, image: anouck21, person: 'anouck', oi: 11 },
    { width: 2560, height: 3413, image: florent22, person: 'florent', oi: 11 },
    { width: 3413, height: 2560, image: anouck23, person: 'anouck', oi: 12 },
    { width: 3511, height: 2560, image: florent24, person: 'florent', oi: 12 },
    { width: 3413, height: 2560, image: florent26, person: 'florent', oi: 13 },
    { width: 3413, height: 2560, image: anouck25, person: 'anouck', oi: 13 },
    { width: 2560, height: 3413, image: anouck27, person: 'anouck', oi: 14 },
    { width: 3835, height: 2560, image: anouck29, person: 'anouck', oi: 15 },
    { width: 2560, height: 3413, image: florent28, person: 'florent', oi: 14 },
    { width: 3778, height: 2560, image: anouck31, person: 'anouck', oi: 16 },
    { width: 3413, height: 2560, image: florent30, person: 'florent', oi: 15 },
    { width: 3896, height: 2560, image: anouck33, person: 'anouck', oi: 17 },
    { width: 3413, height: 2560, image: florent32, person: 'florent', oi: 16 },
    { width: 3413, height: 2560, image: florent34, person: 'florent', oi: 17 },
    { width: 3413, height: 2560, image: anouck35, person: 'anouck', oi: 18 },
    { width: 2560, height: 3504, image: florent36, person: 'florent', oi: 18 },
    { width: 3413, height: 2560, image: anouck37, person: 'anouck', oi: 19 },
    { width: 3413, height: 2560, image: florent38, person: 'florent', oi: 19 },
    { width: 2560, height: 3690, image: anouck39, person: 'anouck', oi: 20 },
    { width: 3413, height: 2560, image: florent40, person: 'florent', oi: 20 },
    { width: 3413, height: 2560, image: anouck41, person: 'anouck', oi: 21 },
    { width: 3413, height: 2560, image: anouck43, person: 'anouck', oi: 22 },
    { width: 2560, height: 4081, image: anouck45, person: 'anouck', oi: 23 },
    { width: 3413, height: 2560, image: florent42, person: 'florent', oi: 21 },
    { width: 3413, height: 2560, image: florent44, person: 'florent', oi: 22 },
    { width: 3413, height: 2560, image: florent46, person: 'florent', oi: 23 },
    { width: 2560, height: 3413, image: anouck47, person: 'anouck', oi: 24 },
    { width: 3413, height: 2560, image: florent48, person: 'florent', oi: 24 },
    { width: 2560, height: 3413, image: anouck49, person: 'anouck', oi: 25 },
    { width: 2560, height: 3413, image: florent50, person: 'florent', oi: 25 },
    { width: 2560, height: 3413, image: anouck51, person: 'anouck', oi: 26 },
    { width: 2560, height: 3413, image: florent52, person: 'florent', oi: 26 },
    { width: 2560, height: 3413, image: florent54, person: 'florent', oi: 27 },
    { width: 2560, height: 3413, image: florent56, person: 'florent', oi: 28 },
    { width: 3413, height: 2560, image: florent58, person: 'florent', oi: 29 },
    { width: 2560, height: 3413, image: anouck53, person: 'anouck', oi: 27 },
    { width: 3413, height: 2560, image: florent68, person: 'florent', oi: 30 },
    { width: 2560, height: 3413, image: florent69, person: 'florent', oi: 31 },
    { width: 2560, height: 3413, image: anouck55, person: 'anouck', oi: 28 },
    { width: 3413, height: 2560, image: florent71, person: 'florent', oi: 32 },
    { width: 2560, height: 4551, image: florent73, person: 'florent', oi: 33 },
    { width: 3413, height: 2560, image: florent75, person: 'florent', oi: 34 },
    { width: 2560, height: 3881, image: anouck57, person: 'anouck', oi: 29 },
    { width: 2560, height: 3315, image: anouck59, person: 'anouck', oi: 30 },
    { width: 2560, height: 4551, image: florent80, person: 'florent', oi: 35 },
    { width: 2560, height: 3413, image: anouck61, person: 'anouck', oi: 31 },
    { width: 3840, height: 2560, image: florent81, person: 'florent', oi: 36 },
    { width: 2560, height: 2560, image: anouck63, person: 'anouck', oi: 32 },
    { width: 3505, height: 2560, image: anouck65, person: 'anouck', oi: 33 },
    { width: 2560, height: 3360, image: anouck67, person: 'both', oi: 1 },
    /* { width: 2560, height: 3840, image: florent60, person: 'florent', oi: 30 }, */
    /* { width: 3413, height: 2560, image: florent62, person: 'florent', oi: 31 }, */
    /* { width: 3413, height: 2560, image: florent64, person: 'florent', oi: 32 }, */
    /* { width: 3840, height: 2560, image: florent66, person: 'florent', oi: 33 }, */
    /* { width: 3413, height: 2560, image: florent70, person: 'florent', oi: 36 }, */
    /* { width: 3840, height: 2560, image: florent72, person: 'florent', oi: 38 }, */
    /* { width: 3840, height: 2560, image: florent74, person: 'florent', oi: 40 }, */
    /* { width: 3840, height: 2560, image: florent76, person: 'florent', oi: 42 }, */
    /* { width: 2560, height: 3840, image: florent77, person: 'florent', oi: 43 }, */
    /* { width: 3840, height: 2560, image: florent78, person: 'florent', oi: 44 }, */
    /* { width: 3840, height: 2560, image: florent79, person: 'florent', oi: 45 }, */
  ].map((obj, index) => {
    const { width, height, person } = obj

    return {
      ...obj,
      ratio: width / height,
      name: person === 'anouck' ? `A-${index + 1}` : `F-${index + 1}`,
      rand: Math.random() * 2 - 1,
      index: index + 1,
    }
  })

  const [count, setCount] = useState(0)

  const [aArr, setAArr] = useState([] as Card[])
  const [fArr, setFArr] = useState([] as Card[])
  const [bArr, setBArr] = useState([] as Card[])

  const bgStyle = useSpring({ opacity: count > 0 ? 0.15 : 1 })

  const add = () => {
    if (count >= cards.length) { return }

    const n = count;
    const c = cards[n];

    if (c.person === 'anouck') {
      setAArr([...aArr, c])
    }
    if (c.person === 'florent') {
      setFArr([...fArr, c])
    }
    if (c.person === 'both') {
      setBArr([...bArr, c])
    }

    setCount(n + 1)
  }

  const remove = () => {
    if (count <= 0) { return }

    const n = count;
    const c = cards[n - 1];

    if (c.person === 'anouck') {
      setAArr(aArr.slice(0, -1))
    }
    if (c.person === 'florent') {
      setFArr(fArr.slice(0, -1))
    }
    if (c.person === 'both') {
      setBArr(bArr.slice(0, -1))
    }

    setCount(count - 1)
  }

  return (
    <div>
      <Head>
        <title>Coutisse Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <Stack className="pointer-events-none" cards={aArr}></Stack>
        <Stack className="left-1/2 pointer-events-none" cards={fArr}></Stack>
        <Stack className="left-1/4 pointer-events-none" cards={bArr}></Stack>
        <a.div className="fixed left-1/4 w-1/2 h-full flex justify-center items-center pointer-events-none select-none"
             style={bgStyle}>
          <div className="relative w-full aspect-square bg-gray-200 rounded-full overflow-hidden border border-white">
            <Image className="mix-blend-darken" layout="fill" src={bgImage} alt="" priority objectFit="cover" placeholder="blur" />
          </div>
        </a.div>
        <button className="fixed top-2 left-2 p-4 border border-gray-300 z-999"
                onClick={remove}
        >
          <FontAwesomeIcon className="w-4 h-4 text-gray-500"
                           icon={faAngleLeft} />
        </button>
        <button className="fixed bottom-2 center-x p-4 w-32 z-999 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-600 duration-300 transition"
                onClick={add}
        >
          <FontAwesomeIcon className="w-4 h-4 text-white"
                           icon={faAngleRight} />
        </button>
      </main>
    </div>
  )
}

export default Home
