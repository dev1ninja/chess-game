import MainLayout from '@/layout/Main'
import Image from 'next/image'

import RoundButton from '@/components/common/Buttons/round'
import List from './list'
import Tabs from './tabs'
import RoomDialog from './dialog'
import CalendarIcon from '@/public/calendar.svg'
import { useState } from 'react'

const mockAvailHeader = [ 'GAMEID', 'LIMIT', 'ENTER', 'NO. OF PLAYERS', 'DATE CREATED' ]
const mockAvailable = [
  [28, 2, '0.5ETH', 0, '04/04/2022'],
  [28, 2, '0.5ETH', 0, '04/04/2022'],
  [28, 2, '0.5ETH', 0, '04/04/2022'],
  [28, 2, '0.5ETH', 0, '04/04/2022'],
  [28, 2, '0.5ETH', 0, '04/04/2022'],
  [28, 2, '0.5ETH', 0, '04/04/2022'],
]
const mockUnavailHeader = [ 'GAMEID', 'LIMIT', 'WINNER', 'AMOUNT WON', 'DATE CREATED' ]
const mockUnavailable = [
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
]

const GameList = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

  const onCreateRoom = () => {
    setShowCreateModal(true)
  }

  return (
    <MainLayout className='text-center'>
      <div className='w-[90%]'>
        <div className='flex justify-end'>
          <div className='relative border border-gray-300 rounded-md py-2 px-8 mr-4 font-bold'>
            <div className='absolute left-4 top-[50%] -translate-y-[50%]'>
              +
            </div>
            MAY 18 - MAY 24
            <Image className='absolute right-2 top-[50%] -translate-y-[50%]' src={CalendarIcon} alt='' width={18}/>
          </div>
          <RoundButton className='pr-4 pl-8' text='Create New Room' onClick={onCreateRoom}>
            <div className='absolute left-4 top-[50%] -translate-y-[50%]'>+</div>
          </RoundButton>
        </div>
        <Tabs
          headers={['Available Games', 'Unavailable Games']}
        >
          <List data={mockAvailable} header={mockAvailHeader} available />
          <List data={mockUnavailable} header={mockUnavailHeader} available={false} />
        </Tabs>
      </div>
      <RoomDialog show={showCreateModal} setShow={setShowCreateModal} />
    </MainLayout>
  )
}

export default GameList