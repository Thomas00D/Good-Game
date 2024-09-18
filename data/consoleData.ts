import { ConsoleType, ConstructorType, VideoGameType } from '@/types/appTypes'
import { nanoid } from 'nanoid'
import { constructorData } from './constuctorData'
import { videoGameData } from './videoGameData'

const createConsoleData = (name: string , constructor: ConstructorType, jeux: VideoGameType[]) => {
  return {
    id: nanoid(),
    name,
    constructor,
    jeux
  }
}

export const consoleData: ConsoleType[] = [
 

]