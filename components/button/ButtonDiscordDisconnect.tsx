import { IconBrandDiscordFilled } from '@tabler/icons-react'

export default function ButtonDiscordDisconnect() {
  return (
    <button className="flex h-12 w-72 items-center justify-center space-x-2 rounded-lg bg-colorsButton text-lg font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white">
      <p>Déconnecter Discord</p>
      <IconBrandDiscordFilled stroke={2} />
    </button>
  )
}
