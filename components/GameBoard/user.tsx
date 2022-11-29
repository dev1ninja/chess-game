import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import UserIcon from '@/public/user.svg'

interface Props {
  name?: string
  className?: string
}

const UserComponent = ({name, className}: Props) => {
  return (
    <div className={twMerge('w-full flex justify-between', className)}>
      <div className='flex gap-2 text-gray-300 py-1'>
        <Image className='bg-dark-1 rounded-md' src={UserIcon} alt='' width={30}/>
        {name}
      </div>
      <div className='px-4 py-2 rounded-md bg-dark-1 text-gray-300'>
        00:00:00
      </div>
    </div>
  )
}

export default UserComponent