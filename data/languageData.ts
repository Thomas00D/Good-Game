import { LanguageType } from '@/types/appTypes'
import { nanoid } from 'nanoid'

const createLanguageData = (name: string) => {
  return {
    id: nanoid(),
    name,
  }
}

export const languageData: LanguageType[] = [
  createLanguageData('English'),
  createLanguageData('Spanish'),
  createLanguageData('French'),
  createLanguageData('German'),
  createLanguageData('Italian'),
]