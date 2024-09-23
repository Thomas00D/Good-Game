'use client'

import { IconBrandDiscordFilled } from '@tabler/icons-react'
import { signOut } from '@/supabase/signOut'

export const ButtonDiscordDisconnect = () => {
  const onSignOutClick = async () => {
    const success = await signOut()
    if (!success) {
      console.error('Error signing out')
    }
  }

  return (
    <button
      onClick={onSignOutClick}
      className="flex h-12 w-72 items-center justify-center space-x-2 rounded-lg bg-colorsButton text-lg font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white"
    >
      Se déconnecter
      <IconBrandDiscordFilled size={48} />
    </button>
  )
}
