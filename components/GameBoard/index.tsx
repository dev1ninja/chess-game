import { useWallet } from '@/provider/wallet'
import MainLayout from '@/layout/Main'
import UserComponent from './user'
import Board from './board'

const GameBoard = () => {
  const { leftGame, isSpectating } = useWallet()
  return (
    <MainLayout>
      <div className='absolute top-20 left-20 text-white cursor-pointer' onClick={leftGame}>
        &lt;&nbsp;&nbsp;Go Back
      </div>
      {
        isSpectating &&
        <div className='text-white text-3xl mb-8'>
          Spectating
        </div>
      }
      <div className='w-[480px]'>
        <UserComponent name='Opponent' className='mb-4'/>
        <Board/>
        <UserComponent name={isSpectating ? 'Opponent1' : 'My Avatar'} className='mt-4'/>
      </div>
    </MainLayout>
  )
}

export default GameBoard