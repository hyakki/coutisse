import type { NextPage } from 'next'
import Head from 'next/head'
/* import Image from 'next/image' */

import Stack from '@/components/Stack';

interface Card {
    ratio: number,
    rand: number,
    index: number,
    src: string,
}

const Home: NextPage = () => {
    const florentCards : Card[] = [
        { ratio: 1.0, src: '/images/florent-001.jpg' },
        { ratio: 1.0, src: '/images/florent-002.jpg' },
        { ratio: 1.0, src: '/images/florent-003.jpg' },
        { ratio: 1.0, src: '/images/florent-004.jpg' },
        { ratio: 1.0, src: '/images/florent-005.jpg' },
        { ratio: 1.0, src: '/images/florent-006.jpg' },
        { ratio: 1.0, src: '/images/florent-007.jpg' },
        { ratio: 1.0, src: '/images/florent-008.jpg' },
        { ratio: 1.0, src: '/images/florent-009.jpg' },
        { ratio: 1.0, src: '/images/florent-010.jpg' },
        { ratio: 1.0, src: '/images/florent-011.jpg' },
        { ratio: 1.0, src: '/images/florent-012.jpg' },
        { ratio: 1.0, src: '/images/florent-013.jpg' },
        { ratio: 1.0, src: '/images/florent-014.jpg' },
        { ratio: 1.0, src: '/images/florent-015.jpg' },
        { ratio: 1.0, src: '/images/florent-016.jpg' },
        { ratio: 1.0, src: '/images/florent-017.jpg' },
        { ratio: 1.0, src: '/images/florent-018.jpg' },
        { ratio: 1.0, src: '/images/florent-019.jpg' },
        { ratio: 1.0, src: '/images/florent-020.jpg' },
        { ratio: 1.0, src: '/images/florent-021.jpg' },
        { ratio: 1.0, src: '/images/florent-022.jpg' },
        { ratio: 1.0, src: '/images/florent-023.jpg' },
        { ratio: 1.0, src: '/images/florent-024.jpg' },
        { ratio: 1.0, src: '/images/florent-025.jpg' },
        { ratio: 1.0, src: '/images/florent-026.jpg' },
        { ratio: 1.0, src: '/images/florent-027.jpg' },
        { ratio: 1.0, src: '/images/florent-028.jpg' },
        { ratio: 1.0, src: '/images/florent-029.jpg' },
        { ratio: 1.0, src: '/images/florent-030.jpg' },
        { ratio: 1.0, src: '/images/florent-031.jpg' },
        { ratio: 1.0, src: '/images/florent-032.jpg' },
        { ratio: 1.0, src: '/images/florent-033.jpg' },
        { ratio: 1.0, src: '/images/florent-034.jpg' },
        { ratio: 1.0, src: '/images/florent-035.jpg' },
        { ratio: 1.0, src: '/images/florent-036.jpg' },
        { ratio: 1.0, src: '/images/florent-037.jpg' },
        { ratio: 1.0, src: '/images/florent-038.jpg' },
        { ratio: 1.0, src: '/images/florent-039.jpg' },
        { ratio: 1.0, src: '/images/florent-040.jpg' },
        { ratio: 1.0, src: '/images/florent-041.jpg' },
        { ratio: 1.0, src: '/images/florent-042.jpg' },
        { ratio: 1.0, src: '/images/florent-043.jpg' },
        { ratio: 1.0, src: '/images/florent-044.jpg' },
        { ratio: 1.0, src: '/images/florent-045.jpg' },
        { ratio: 1.0, src: '/images/florent-046.jpg' },
        { ratio: 1.0, src: '/images/florent-047.jpg' },
    ].map((obj, index) => {
        return {
            ...obj,
            rand: Math.random() * 2 - 1,
            index: index + 1,
        };
    });

    const anouckCards: Card[] = [
      { ratio: 1.0, src: '/images/anouck-001.jpg' },
      { ratio: 1.0, src: '/images/anouck-002.jpg' },
      { ratio: 1.0, src: '/images/anouck-003.jpg' },
      { ratio: 1.0, src: '/images/anouck-004.jpg' },
      { ratio: 1.0, src: '/images/anouck-005.jpg' },
      { ratio: 1.0, src: '/images/anouck-006.jpg' },
      { ratio: 1.0, src: '/images/anouck-007.jpg' },
      { ratio: 1.0, src: '/images/anouck-008.jpg' },
      { ratio: 1.0, src: '/images/anouck-009.jpg' },
      { ratio: 1.0, src: '/images/anouck-010.jpg' },
      { ratio: 1.0, src: '/images/anouck-011.jpg' },
      { ratio: 1.0, src: '/images/anouck-012.jpg' },
      { ratio: 1.0, src: '/images/anouck-013.jpg' },
      { ratio: 1.0, src: '/images/anouck-014.jpg' },
      { ratio: 1.0, src: '/images/anouck-015.jpg' },
      { ratio: 1.0, src: '/images/anouck-016.jpg' },
      { ratio: 1.0, src: '/images/anouck-017.jpg' },
      { ratio: 1.0, src: '/images/anouck-018.jpg' },
      { ratio: 1.0, src: '/images/anouck-019.jpg' },
      { ratio: 1.0, src: '/images/anouck-020.jpg' },
      { ratio: 1.0, src: '/images/anouck-021.jpg' },
      { ratio: 1.0, src: '/images/anouck-022.jpg' },
      { ratio: 1.0, src: '/images/anouck-023.jpg' },
      { ratio: 1.0, src: '/images/anouck-024.jpg' },
      { ratio: 1.0, src: '/images/anouck-025.jpg' },
      { ratio: 1.0, src: '/images/anouck-026.jpg' },
      { ratio: 1.0, src: '/images/anouck-027.jpg' },
      { ratio: 1.0, src: '/images/anouck-028.jpg' },
      { ratio: 1.0, src: '/images/anouck-029.jpg' },
      { ratio: 1.0, src: '/images/anouck-030.jpg' },
      { ratio: 1.0, src: '/images/anouck-031.jpg' },
      { ratio: 1.0, src: '/images/anouck-032.jpg' },
      { ratio: 1.0, src: '/images/anouck-033.jpg' },
      { ratio: 1.0, src: '/images/anouck-034.jpg' },
    ].map((obj, index) => {
        return {
            ...obj,
            rand: Math.random() * 2 - 1,
            index: index + 1,
        };
    });


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <Stack cards={anouckCards}></Stack>
        <Stack className="left-1/2" cards={florentCards}></Stack>
      </main>
    </div>
  )
}

export default Home
