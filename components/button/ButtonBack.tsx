'use client'

import { useRouter } from 'next/navigation'
import { IconArrowBack } from '@tabler/icons-react'

export default function ButtonBack() {
  const router = useRouter()
  return (
    <button onClick={() => router.back()}>
      <IconArrowBack className="h-12 w-12 rounded-full bg-colorsButton font-bold text-textBlack hover:border hover:border-colorsButton hover:bg-mainBackground hover:text-white" />
    </button>
  )
}
