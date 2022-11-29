import Head from 'next/head'
import Image from 'next/image'

import GameList from '@/components/GameList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chess Games</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GameList/>
    </div>
  )
}
