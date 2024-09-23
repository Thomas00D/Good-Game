'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AppLogo from '@/components/home/AppLogo'
import Title from '@/components/home/Title'
import { supabaseClient } from '@/supabase/supabaseClient'
import { ButtonDiscordConnect } from '../button/ButtonDiscordConnect'

export default function HomeScreen() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser()

      if (user) {
        // Si l'utilisateur est connecté, on redirige vers /membre
        router.push('/membre')
      }
    }

    checkUser()
  }, [router])

  return (
    <div className="flex flex-col items-center space-y-6">
      <AppLogo />
      <Title />
      <ButtonDiscordConnect />
    </div>
  )
}
