import { useRef, useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

import DownIcon from '@/public/down-arrow.svg'

interface Props {
  className?: string
  options?: Array<string>
  unit?: string
  label?: string
}

const Dropdown = ({className, label, options, unit}: Props) => {
  const [selected, setSelected] = useState(0)
  const [show, setShow] = useState(false)
  const containerRef = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if ( !containerRef?.current?.contains(e.target) ) {
        setShow(false)
      }
    }
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={twMerge('', className)}>
      <div className='font-bold text-left mb-2'>{label}</div>
      <div className='w-full relative text-left' ref={containerRef}>
        <div className='w-full px-4 py-2 border' onClick={() => setShow(!show)}>
          {options && options[selected]}
          <Image className='absolute top-[50%] -translate-y-[50%] right-4' src={DownIcon} alt='' width={15}/>
          <div  className='absolute top-[50%] -translate-y-[50%] right-4 -translate-x-[100%]'>{unit}</div>
        </div>
        <div className='absolute w-full z-50 bg-white'>
          {
            show && options?.map( (option, index) => (
              <div
                key={index}
                onClick={() => {setSelected(index); setShow(false);}}
                className='px-4 py-2 border-l border-r border-b'
              >
                {option}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dropdown