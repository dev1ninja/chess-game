import { twMerge } from 'tailwind-merge'

import { useWallet } from '@/provider/wallet'
import Header from './Header'
import Board from '@/public/board.jpg'

interface Props {
  className?: string
  children?: React.ReactNode
}

const MainLayout = ({className, children}: Props) => {
  const { isJoined } = useWallet()

  return (
    <div className='px-16'>
      <Header />
      {
        isJoined ?
        <div className='fixed top-0 left-0 w-screen h-screen bg-dark-0 z-[-10]'/>:
        <div className={`fixed top-0 left-0 w-screen h-screen z-[-10]`} style={{backgroundImage:`url(${Board.src})`}}/> 
      }
      <div className={twMerge('w-full flex flex-col items-center py-8', className)}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout