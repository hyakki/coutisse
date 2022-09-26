import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import { useState } from 'react'

import bgImage from '../public/images/bg.jpg'

import Stack from '@/components/Stack'

interface Card {
  width: number
  height: number
  ratio: number
  rand: number
  index: number
  image: string,
  name: string
  person: string
  oi: number
}

const basePath = ''

/* const bgImage = basePath + '/images/bg.jpg' */

const Home: NextPage = () => {

  const cards: Card[] = [
    { width: 3413, height: 2560, image: basePath + '/images/anouck-01-r.jpg', person: 'anouck', oi: 1 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-02-r.jpg', person: 'florent', oi: 1 },
    { width: 3829, height: 2560, image: basePath + '/images/anouck-03-r.jpg', person: 'anouck', oi: 2 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-05-r.jpg', person: 'anouck', oi: 3 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-07-r.jpg', person: 'anouck', oi: 4 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-04-r.jpg', person: 'florent', oi: 2 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-06-r.jpg', person: 'florent', oi: 3 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-09-r.jpg', person: 'anouck', oi: 5 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-08-r.jpg', person: 'florent', oi: 4 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-11-r.jpg', person: 'anouck', oi: 6 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-10-r.jpg', person: 'florent', oi: 5 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-13-r.jpg', person: 'anouck', oi: 7 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-12-r.jpg', person: 'florent', oi: 6 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-14-r.jpg', person: 'florent', oi: 7 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-15-r.jpg', person: 'anouck', oi: 8 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-16-r.jpg', person: 'florent', oi: 8 },
    { width: 3820, height: 2560, image: basePath + '/images/anouck-17-r.jpg', person: 'anouck', oi: 9 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-18-r.jpg', person: 'florent', oi: 9 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-20-r.jpg', person: 'florent', oi: 10 },
    { width: 3854, height: 2560, image: basePath + '/images/anouck-19-r.jpg', person: 'anouck', oi: 10 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-21-r.jpg', person: 'anouck', oi: 11 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-22-r.jpg', person: 'florent', oi: 11 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-23-r.jpg', person: 'anouck', oi: 12 },
    { width: 3511, height: 2560, image: basePath + '/images/florent-24-r.jpg', person: 'florent', oi: 12 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-26-r.jpg', person: 'florent', oi: 13 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-25-r.jpg', person: 'anouck', oi: 13 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-27-r.jpg', person: 'anouck', oi: 14 },
    { width: 3835, height: 2560, image: basePath + '/images/anouck-29-r.jpg', person: 'anouck', oi: 15 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-28-r.jpg', person: 'florent', oi: 14 },
    { width: 3778, height: 2560, image: basePath + '/images/anouck-31-r.jpg', person: 'anouck', oi: 16 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-30-r.jpg', person: 'florent', oi: 15 },
    { width: 3896, height: 2560, image: basePath + '/images/anouck-33-r.jpg', person: 'anouck', oi: 17 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-32-r.jpg', person: 'florent', oi: 16 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-34-r.jpg', person: 'florent', oi: 17 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-35-r.jpg', person: 'anouck', oi: 18 },
    { width: 2560, height: 3504, image: basePath + '/images/florent-36-r.jpg', person: 'florent', oi: 18 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-37-r.jpg', person: 'anouck', oi: 19 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-38-r.jpg', person: 'florent', oi: 19 },
    { width: 2560, height: 3690, image: basePath + '/images/anouck-39-r.jpg', person: 'anouck', oi: 20 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-40-r.jpg', person: 'florent', oi: 20 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-41-r.jpg', person: 'anouck', oi: 21 },
    { width: 3413, height: 2560, image: basePath + '/images/anouck-43-r.jpg', person: 'anouck', oi: 22 },
    { width: 2560, height: 4081, image: basePath + '/images/anouck-45-r.jpg', person: 'anouck', oi: 23 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-42-r.jpg', person: 'florent', oi: 21 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-44-r.jpg', person: 'florent', oi: 22 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-46-r.jpg', person: 'florent', oi: 23 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-47-r.jpg', person: 'anouck', oi: 24 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-48-r.jpg', person: 'florent', oi: 24 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-49-r.jpg', person: 'anouck', oi: 25 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-50-r.jpg', person: 'florent', oi: 25 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-51-r.jpg', person: 'anouck', oi: 26 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-52-r.jpg', person: 'florent', oi: 26 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-54-r.jpg', person: 'florent', oi: 27 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-56-r.jpg', person: 'florent', oi: 28 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-58-r.jpg', person: 'florent', oi: 29 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-53-r.jpg', person: 'anouck', oi: 27 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-68-r.jpg', person: 'florent', oi: 30 },
    { width: 2560, height: 3413, image: basePath + '/images/florent-69-r.jpg', person: 'florent', oi: 31 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-55-r.jpg', person: 'anouck', oi: 28 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-71-r.jpg', person: 'florent', oi: 32 },
    { width: 2560, height: 4551, image: basePath + '/images/florent-73-r.jpg', person: 'florent', oi: 33 },
    { width: 3413, height: 2560, image: basePath + '/images/florent-75-r.jpg', person: 'florent', oi: 34 },
    { width: 2560, height: 3881, image: basePath + '/images/anouck-57-r.jpg', person: 'anouck', oi: 29 },
    { width: 2560, height: 3315, image: basePath + '/images/anouck-59-r.jpg', person: 'anouck', oi: 30 },
    { width: 2560, height: 4551, image: basePath + '/images/florent-80-r.jpg', person: 'florent', oi: 35 },
    { width: 2560, height: 3413, image: basePath + '/images/anouck-61-r.jpg', person: 'anouck', oi: 31 },
    { width: 3840, height: 2560, image: basePath + '/images/florent-81-r.jpg', person: 'florent', oi: 36 },
    { width: 2560, height: 2560, image: basePath + '/images/anouck-63-r.jpg', person: 'anouck', oi: 32 },
    { width: 3505, height: 2560, image: basePath + '/images/anouck-65-r.jpg', person: 'anouck', oi: 33 },
    { width: 2560, height: 3360, image: basePath + '/images/anouck-67-r.jpg', person: 'anouck', oi: 34 },
    /* { width: 2560, height: 3840, image: basePath + '/images/florent-60-r.jpg', person: 'florent', oi: 30 }, */
    /* { width: 3413, height: 2560, image: basePath + '/images/florent-62-r.jpg', person: 'florent', oi: 31 }, */
    /* { width: 3413, height: 2560, image: basePath + '/images/florent-64-r.jpg', person: 'florent', oi: 32 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-66-r.jpg', person: 'florent', oi: 33 }, */
    /* { width: 3413, height: 2560, image: basePath + '/images/florent-70-r.jpg', person: 'florent', oi: 36 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-72-r.jpg', person: 'florent', oi: 38 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-74-r.jpg', person: 'florent', oi: 40 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-76-r.jpg', person: 'florent', oi: 42 }, */
    /* { width: 2560, height: 3840, image: basePath + '/images/florent-77-r.jpg', person: 'florent', oi: 43 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-78-r.jpg', person: 'florent', oi: 44 }, */
    /* { width: 3840, height: 2560, image: basePath + '/images/florent-79-r.jpg', person: 'florent', oi: 45 }, */
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

    setCount(count - 1)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <Stack cards={aArr}></Stack>
        <Stack className="left-1/2" cards={fArr}></Stack>
        <div className="fixed left-1/4 w-1/2 h-full flex justify-center items-center">
          <div className="relative portrait:w-4/5 landscape:w-full aspect-square grayscale opacity-50">
              <Image layout="fill" src={bgImage} alt="" priority objectFit="contain" placeholder="blur" />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full flex justify-between p-4">
          <button className="p-4 border" onClick={add}>Add</button>
          <button className="p-4 border" onClick={remove}>Remove</button>
        </div>
      </main>
    </div>
  )
}

export default Home
