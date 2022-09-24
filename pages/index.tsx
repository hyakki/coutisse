import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import { useState } from 'react'

import Stack from '@/components/Stack'

interface Card {
  width: number
  height: number
  ratio: number
  rand: number
  zIndex: number
  src: string
  name: string
  person: string
}

const basePath = '/coutisse';
/* const basePath = '' */

const bgImage = basePath + '/images/bg.jpg'

const Home: NextPage = () => {
  const cards: Card[] = [
    { width: 3413, height: 2560, src: basePath + '/images/anouck-001-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-001-r.jpg', person: 'florent' },
    { width: 3829, height: 2560, src: basePath + '/images/anouck-002-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-002-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-003-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-003-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-004-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-004-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-005-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-005-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-006-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-006-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-007-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-007-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-008-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-008-r.jpg', person: 'florent' },
    { width: 3820, height: 2560, src: basePath + '/images/anouck-009-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-009-r.jpg', person: 'florent' },
    { width: 3854, height: 2560, src: basePath + '/images/anouck-010-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-010-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-011-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-011-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-012-r.jpg', person: 'anouck' },
    { width: 3511, height: 2560, src: basePath + '/images/florent-012-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-013-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-013-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-014-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-014-r.jpg', person: 'florent' },
    { width: 3835, height: 2560, src: basePath + '/images/anouck-015-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-015-r.jpg', person: 'florent' },
    { width: 3778, height: 2560, src: basePath + '/images/anouck-016-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-016-r.jpg', person: 'florent' },
    { width: 3896, height: 2560, src: basePath + '/images/anouck-017-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-017-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-018-r.jpg', person: 'anouck' },
    { width: 2560, height: 3504, src: basePath + '/images/florent-018-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-019-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-019-r.jpg', person: 'florent' },
    { width: 2560, height: 3690, src: basePath + '/images/anouck-020-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-020-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-021-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-021-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/anouck-022-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-022-r.jpg', person: 'florent' },
    { width: 2560, height: 4081, src: basePath + '/images/anouck-023-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-023-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-024-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-024-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-025-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-025-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-026-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-026-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-027-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-027-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-028-r.jpg', person: 'anouck' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-028-r.jpg', person: 'florent' },
    { width: 2560, height: 3881, src: basePath + '/images/anouck-029-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-029-r.jpg', person: 'florent' },
    { width: 2560, height: 3315, src: basePath + '/images/anouck-030-r.jpg', person: 'anouck' },
    { width: 2560, height: 3840, src: basePath + '/images/florent-030-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/anouck-031-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-031-r.jpg', person: 'florent' },
    { width: 2560, height: 2560, src: basePath + '/images/anouck-032-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-032-r.jpg', person: 'florent' },
    { width: 3505, height: 2560, src: basePath + '/images/anouck-033-r.jpg', person: 'anouck' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-033-r.jpg', person: 'florent' },
    { width: 2560, height: 3360, src: basePath + '/images/anouck-034-r.jpg', person: 'anouck' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-034-r.jpg', person: 'florent' },
    { width: 2560, height: 3413, src: basePath + '/images/florent-035-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-036-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-037-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-038-r.jpg', person: 'florent' },
    { width: 2560, height: 4551, src: basePath + '/images/florent-039-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-040-r.jpg', person: 'florent' },
    { width: 3413, height: 2560, src: basePath + '/images/florent-041-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-042-r.jpg', person: 'florent' },
    { width: 2560, height: 3840, src: basePath + '/images/florent-043-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-044-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-045-r.jpg', person: 'florent' },
    { width: 2560, height: 4551, src: basePath + '/images/florent-046-r.jpg', person: 'florent' },
    { width: 3840, height: 2560, src: basePath + '/images/florent-047-r.jpg', person: 'florent' },
  ].map((obj, index) => {
    return {
      ...obj,
      ratio: obj.width / obj.height,
      name: obj.person === 'anouck' ? `A-${index + 1}` : `F-${index + 1}`,
      rand: Math.random() * 2 - 1,
      zIndex: index + 1,
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
              <Image layout="fill" src={bgImage} alt="" priority objectFit="contain" />
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
