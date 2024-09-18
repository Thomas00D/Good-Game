'use client'

import { IconBrandDiscordFilled } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function ButtonDiscordConnect() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/member')}
      className="flex h-12 w-72 items-center justify-center space-x-2 rounded-lg bg-colorsButton text-lg font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white"
    >
      <p>Connexion Discord</p>
      <IconBrandDiscordFilled stroke={2} />
    </button>
  )
}
