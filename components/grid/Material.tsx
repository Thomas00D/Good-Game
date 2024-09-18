import { GridType } from '@/types/appTypes'
import { FC } from 'react'

type Props = {
  user: GridType
}

const Material: FC<Props> = ({ user }: Props) => {
  return (
    <div className="w-full border border-borderCard p-4">
      <ul className="flex flex-wrap gap-2">
        {user.console.map((con) => (
          <li key={con.id}>{con.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Material