import DialogLayout from '@/layout/Dialog'
import Dropdown from '@/components/common/Dropdown'

interface Props {
  show?: boolean
  setShow: any
}

const RoomDialog = ({show, setShow}: Props) => {
  const dismissModal = () => {
    setShow(false)
  }
  
  return (
    <DialogLayout
      header='Creat New Room'
      okName='Save'
      cancelName='Cancel'
      okAction={dismissModal}
      cancelAction={dismissModal}
      className='w-[500px]'
      show={show}
      setShow={setShow}
    >
      <Dropdown
        className='w-full mb-8'
        label='Entry Fee'
        options={['0.001ETH', '0.002ETH', '0.003ETH']}
        unit='ETH'
      />
      <Dropdown
        className='w-full mb-8'
        label='Room Privacy'
        options={['Public', 'Private']}
      />
    </DialogLayout>
  )
}

export default RoomDialog