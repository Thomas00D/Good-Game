import { GridType } from '@/types/appTypes'
import { FC } from 'react'

type Props = {
  user: GridType
}

const classNameLanguage = 'bg-Language border-borderPastille inline-flex rounded-full border px-3 py-1 text-center text-textLigth'

const language: FC<Props> = ({ user }: Props) => {
  return (
    <div className="w-full border border-borderCard p-4">
      <ul className="flex flex-wrap gap-2">
        {user.language.map((lang) => (
          <li
            key={lang.id}
            className={classNameLanguage}
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default language
