import ButtonBack from '@/components/button/ButtonBack'
import GridScreen from '@/components/grid/GridScreen'


export default function Home() {
  return (
    <div>
      <ButtonBack />
      <div className="flex h-screen items-center justify-center bg-mainBackground">
        <GridScreen />
      </div>
    </div>
  )
}
