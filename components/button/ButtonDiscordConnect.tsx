'use client'

import { IconBrandDiscordFilled } from '@tabler/icons-react'
import { signInWithDiscord } from '@/supabase/signInWithDiscord'

export const ButtonDiscordConnect = () => {
  const onSignInClick = async () => {
    const data = await signInWithDiscord()
    if (data === null) {
      console.error('Error signing in with Discord')
    }
  }

  return (
    <button
      onClick={onSignInClick}
      className="flex h-12 w-72 items-center justify-center space-x-2 rounded-lg bg-colorsButton text-lg font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white"
    >
      Se connecter avec Discord
      <IconBrandDiscordFilled size={48} />
    </button>
  )
}
