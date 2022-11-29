import MainLayout from '@/layout/Main'

import { useWallet } from '@/provider/wallet'
import RoundButton from '@/components/common/Buttons/round'
import MetamaskIcon from '@/public/metamask-icon.svg'
import CoinbaseIcon from '@/public/coinbase.svg'

const Landing = () => {
  const { connectWallet } = useWallet()
  
  const connectMetamask = () => {
    connectWallet(0)
  }
  
  const connectPhantom = () => {
    connectWallet(1)
  }

  return (
    <MainLayout className='text-center mt-10'>
      <div className='font-bold text-4xl'>
        Welcome to Chess Games
      </div>
      <div className='text-gray-500 mt-4'>
        Log in with your wallet to be able to authenticate and play games
      </div>
      <RoundButton className='w-[400px] rounded-full mt-4' text='Sign in with metamask' icon={MetamaskIcon} onClick={connectMetamask}/>
      <RoundButton
        className='w-[400px] rounded-full mt-4 bg-transparent border border-gray-500 text-black'
        text='Sign in with Coinbase Wallet'
        icon={CoinbaseIcon}
        onClick={connectPhantom}
      />
      <a className='mt-8 underline cursor-pointer'>Show more options</a>
    </MainLayout>
  )
}

export default Landing