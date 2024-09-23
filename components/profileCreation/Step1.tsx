'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import logoApp from '@/app/assets/image/logoApp.png'
import { insertUsers } from '@/database/insertUsers'
import { supabaseSession } from '@/supabase/supabaseSession'

type Props = {}

const Step1: FC<Props> = ({}: Props) => {
  const { session } = supabaseSession()

  const [avatarUrl, setAvatarUrl] = useState<string>(logoApp.src)
  const [pseudo, setPseudo] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [language, setLanguage] = useState<string>('')

  useEffect(() => {
    if (session) {
      console.log('Session:', session)
      if (session.user) {
        const userAvatar = session.user.user_metadata.avatar_url
        setAvatarUrl(userAvatar || logoApp)
      }
    }

    if (session === null || session.user === null) {
      setPseudo('')
    } else {
      setPseudo(session.user.user_metadata.custom_claims.global_name)
    }
  }, [session])

  const { insertUserById } = insertUsers()

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Empêche le rechargement de la page
    insertUserById(pseudo, language, age, avatarUrl, 'step-1-completed')
  }

  return (
    <div className="flex flex-col items-center space-y-3 border border-borderCard bg-secondBackground p-3">
      <Image
        src={avatarUrl}
        alt="avatar"
        width={100}
        height={100}
        style={{ borderRadius: '50%' }}
        priority={true}
      />
      <form
        className="flex flex-col items-center space-y-3"
      >
        <div>
          <label htmlFor="pseudo">
            Pseudo <span className="text-red-500">*</span>
          </label>
          <input
            id="pseudo"
            type="text"
            value={pseudo}
            readOnly
            className="text-center text-textBlack"
          />
        </div>
        <div>
          <label htmlFor="birthday">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            id="birthday"
            type="number"
            min={18}
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || 18)}
            className="text-center text-textBlack"
          />
        </div>
        <div>
          <label htmlFor="language">Langue paler</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-center text-textBlack"
          >
            <option value="Francais">Francais</option>
            <option value="Anglais">Anglais</option>
          </select>
        </div>
        <button
        onSubmit={handleOnSubmit}
          type="submit"
          className="flex h-6 w-36 items-center justify-center space-x-2 rounded-lg bg-colorsButton text-base font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white"
        >
          Valider
        </button>
      </form>
      <div>
        <p className="text-red-500">*</p>
        <p>
          Pseudo discord il ne peux etre modifier ici rendez-vous sur{' '}
          <a href="discord.com">discord.com</a>
        </p>
        <p>Vous devais avoir minimum 18ans</p>
      </div>
    </div>
  )
}

export default Step1
