import { GridType } from '@/types/appTypes'
import { IconCalendar, IconUser } from '@tabler/icons-react'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  user: GridType
}

const InfoUser: FC<Props> = ({ user }: Props) => {
  return (
    <div className="space-y-2 flex flex-col items-center mb-2">
      <Image
        src={user.picture}
        alt={user.nameUser}
        width={100}
        height={100}
        style={{ borderRadius: '50%' }}
      />
      <p>{user.nameUser}</p>
      <div className="flex space-x-2">
        <div className="flex items-center space-x-2">
          <IconCalendar stroke={2} />
          <p>{user.age} ans</p>
        </div>
        <div className="flex items-center space-x-2">
          <IconUser stroke={2} />
          <p>{user.sex}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoUser
