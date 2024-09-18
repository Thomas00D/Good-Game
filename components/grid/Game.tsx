import { GridType } from '@/types/appTypes'
import { FC } from 'react'

type Props = {
  user: GridType
}

const Game: FC<Props> = ({ user }: Props) => {
  return (
    <div className="w-full border border-borderCard p-4">
      <h3 className="font-semibold">Jeux Vidéos</h3>
      <ul>
        {user.game.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Game
