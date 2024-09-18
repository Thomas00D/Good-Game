import { ConstructorType } from '@/types/appTypes'
import { nanoid } from 'nanoid'

const createConstructorData = (name: string) => {
  return {
    id: nanoid(),
    name,
  }
}

export const constructorData: ConstructorType[] = [
  createConstructorData('Sony'),
  createConstructorData('Microsoft'),
  createConstructorData('Nintendo'),
  createConstructorData('Valve'),
  createConstructorData('pc'),
]
