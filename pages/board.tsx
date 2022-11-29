import Head from 'next/head'
import Image from 'next/image'

import GameBoard from '@/components/GameBoard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chess Games</title>
        <link rel='icon' href='/favicon.ico' />        
      </Head>
      <GameBoard/>
    </div>
  )
}
