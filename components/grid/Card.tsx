import { GridType } from '@/types/appTypes'
import { FC } from 'react'
import InfoUser from './InfoUser'
import Language from './Language'
import Material from './Material'
import Game from './Game'

type Props = {
  gridData: GridType[]
}

const Card: FC<Props> = ({ gridData }: Props) => {
  const user = gridData[0]

  return (
    <div className="grid grid-cols-3 gap-5">
      {user && (
        <div
          key={user.id}
          className="flex w-96 flex-col items-center rounded-lg border border-borderCard bg-secondBackground pt-6"
        >
          <InfoUser user={user} />
          <Language user={user} />
          <Material user={user} />
          <Game user={user} />
        </div>
      )}
    </div>
  )
}

export default Card
