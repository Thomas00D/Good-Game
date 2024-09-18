import ButtonDiscordConnect from "@/components/button/ButtonDiscordConnect";
import AppLogo from "@/components/home/AppLogo";
import Title from "@/components/home/Title";


export default function HomeScreen  ()  {
  return (
    <div className="flex flex-col items-center space-y-6">
      <AppLogo />
      <Title />
      <ButtonDiscordConnect />
    </div>
  )
}
