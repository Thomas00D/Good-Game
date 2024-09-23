import Image from 'next/image'
import logoApp from '@/app/assets/image/logoApp.png'

export default function AppLogo() {
  return (
    <Image
      src={logoApp}
      alt="Logo de Good Game"
      width={500}
      height={500}
      style={{ borderRadius: '50%' }}
    />
  )
}
