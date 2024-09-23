import { ButtonDiscordDisconnect } from '@/components/button/ButtonDiscordDisconnect'
import StepScrenn from '@/components/profileCreation/stepScrenn'

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-10 right-10">
      <ButtonDiscordDisconnect /></div>
      <div className="flex h-screen items-center justify-center bg-mainBackground">
        <StepScrenn />
      </div>
    </div>
  )
}
