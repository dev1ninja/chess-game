import { createContext, useContext, PropsWithChildren, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const coinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/9624f806397c41068686a3abffdc6044 `,
  appName: 'CoinBase',
})

const activateInjectedProvider = (providerName = 'MetaMask') => {
  const { ethereum } = window;
  if (!ethereum?.providers) {
    return undefined
  }

  let provider;
  switch (providerName) {
    case 'CoinBase':
      provider = ethereum.providers.find(({ isCoinbaseWallet }: any) => isCoinbaseWallet)
      break;
    case 'MetaMask':
      provider = ethereum.providers.find(({ isMetaMask }: any) => isMetaMask)
      break;
  }

  if (provider) {
    ethereum.setSelectedProvider(provider)
  }
}

export type WalletCtxProps = {
  active: boolean
  account: any
  balance: any
  connectWallet: (which: number) => void
  isJoined: boolean
  joinGame: (mode: number) => void
  leftGame: () => void
  isSpectating: boolean
}

const WalletCtx = createContext<WalletCtxProps>({} as WalletCtxProps)

export function useWallet() {
  return useContext(WalletCtx)
}

export function WalletProvider({ children }: PropsWithChildren<{}>) {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const router = useRouter()
  const [balance, setBalance] = useState(0)
  const [isJoined, setIsJoined] = useState(false)
  const [isSpectating, setIsSpectating] = useState(false)

  useEffect( () => {
    if ( router.pathname !== '/' && !active )
      router.push('/')
  }, [router])

  useEffect( () => {
    if ( active )
      router.push('/list')
    else
      router.push('/')
  }, [active])

  useEffect( () => {
    if ( isJoined )
      router.push('/board')
    else
      router.push('/list')
  }, [isJoined])

  useEffect( () => {
    library?.getBalance(account).then( (res: any) => setBalance(res/1e18) )
  }, [library])

  const connectWallet = async (which: number) => {
    try {
      if ( which === 0 ) {
        activateInjectedProvider()
        await activate(injected)
      }
      else {
        await activate(coinbaseWallet)
      }
    } catch(err) {
    }
  }

  const joinGame = (mode: number) => {
    setIsJoined(true)
    if ( mode === 1 )
      setIsSpectating(true)
  }

  const leftGame = () => {
    setIsJoined(false)
  }

  const value = {
    active,
    account,
    balance,
    connectWallet,
    isJoined,
    joinGame,
    leftGame,
    isSpectating
  }

  return <WalletCtx.Provider value={value}>
    { children }
  </WalletCtx.Provider>
}
