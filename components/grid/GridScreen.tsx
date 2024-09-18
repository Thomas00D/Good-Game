import Card from '@/components/grid/Card'
import { gridData } from '@/data/gridData'

export default function GridScreen() {
  return (
    <div>
      <Card gridData={gridData} />
    </div>
  )
}
