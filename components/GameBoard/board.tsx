import Image from 'next/image'
import { useState } from 'react'

import ChessBoard from '@/public/chess-board.jpg'

import { counterData } from './board.data'

const Board = () => {
  const [counters, setCouters] = useState(counterData)
  return (
    <div className={`w-[480px] h-[480px] relative`} style={{backgroundImage:`url(${ChessBoard.src})`}}>
    {
      Array.from(Array(8).keys()).map(val => (
        <div key={val} className='absolute text-right' style={{
          right: '2px',
          top: `${60*val}px`,
          color: val % 2 ? 'rgb(240, 217, 181)' : 'rgb(181, 136, 99)'
        }}>
          {8-val}
        </div>
      ))
    }
    {
      Array.from(Array(8).keys()).map(val => (
        <div key={val} className='absolute text-left' style={{
          bottom: '0px',
          left: `${60*val+2}px`,
          color: val % 2 ? 'rgb(240, 217, 181)' : 'rgb(181, 136, 99)'
        }}>
          {String.fromCharCode('a'.charCodeAt(0)+val)}
        </div>
      ))
    }
    {
      counters?.map( (counter, index) => (
        <div className='absolute' key={index} style={{
          left: `${counter.position[1] * 60}px`,
          top: `${counter.position[0] * 60}px`
        }} onClick={()=>{console.log(counter.url)}}>
          <Image src={counter.url} width={60} height={60} alt=''/>
        </div>
      ))
    }
    </div>
  )
}

export default Board