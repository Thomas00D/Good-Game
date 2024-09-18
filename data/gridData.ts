import {
  ConsoleType,
  GridType,
  LanguageType,
  VideoGameType,
} from '@/types/appTypes'
import { nanoid } from 'nanoid'
import { consoleData } from './consoleData'
import { languageData } from './languageData'
import { videoGameData } from './videoGameData'

const createGridData = (
  picture: string,
  nameUser: string,
  age: number,
  sex: string,
  language: LanguageType[],
  console: ConsoleType[],
  game: VideoGameType[],
): GridType => {
  return {
    id: nanoid(),
    picture,
    nameUser,
    age,
    sex,
    language,
    console,
    game,
  }
}

export const gridData: GridType[] = [
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg', // Photo de profil
    'Alex Turner',
    28,
    'Male',
    [languageData[0], languageData[1], languageData[4], languageData[4], languageData[4]], // English
    [consoleData[0], consoleData[2]],
    [videoGameData[0], videoGameData[1]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Emily Davis',
    22,
    'Female',
    [languageData[0], languageData[1]], // English, Spanish
    [consoleData[1], consoleData[3]],
    [videoGameData[2], videoGameData[5]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Lucas Kim',
    34,
    'Male',
    [languageData[0]], // English
    [consoleData[4], consoleData[5]],
    [videoGameData[3], videoGameData[6]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Sarah Johnson',
    27,
    'Female',
    [languageData[0], languageData[2]], // English, French
    [consoleData[6], consoleData[7]],
    [videoGameData[4], videoGameData[7]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'David Lee',
    19,
    'Male',
    [languageData[0], languageData[4]], // English, Italian
    [consoleData[8], consoleData[9]],
    [videoGameData[8], videoGameData[9]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Isabella Martinez',
    25,
    'Female',
    [languageData[1]], // Spanish
    [consoleData[10], consoleData[11]],
    [videoGameData[0], videoGameData[2]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Jake Robinson',
    30,
    'Male',
    [languageData[0]], // English
    [consoleData[12], consoleData[1]],
    [videoGameData[5], videoGameData[3]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Mia Wilson',
    24,
    'Female',
    [languageData[0], languageData[3]], // English, German
    [consoleData[13], consoleData[0]],
    [videoGameData[6], videoGameData[7]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Tom Nguyen',
    31,
    'Male',
    [languageData[0], languageData[1]], // English, Spanish
    [consoleData[2], consoleData[4]],
    [videoGameData[8], videoGameData[1]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Sophia Brown',
    21,
    'Female',
    [languageData[2], languageData[0]], // French, English
    [consoleData[5], consoleData[6]],
    [videoGameData[9], videoGameData[0]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Noah Thompson',
    32,
    'Male',
    [languageData[0], languageData[3]], // English, German
    [consoleData[2], consoleData[4]],
    [videoGameData[4], videoGameData[6]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Olivia White',
    26,
    'Female',
    [languageData[0], languageData[4]], // English, Italian
    [consoleData[1], consoleData[5]],
    [videoGameData[2], videoGameData[7]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Ethan Garcia',
    23,
    'Male',
    [languageData[0]], // English
    [consoleData[9], consoleData[3]],
    [videoGameData[3], videoGameData[9]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Ava Patel',
    29,
    'Female',
    [languageData[1], languageData[2]], // Spanish, French
    [consoleData[6], consoleData[8]],
    [videoGameData[1], videoGameData[8]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Liam Scott',
    35,
    'Male',
    [languageData[0], languageData[1]], // English, Spanish
    [consoleData[7], consoleData[12]],
    [videoGameData[5], videoGameData[1]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Sophia King',
    27,
    'Female',
    [languageData[0], languageData[3]], // English, German
    [consoleData[0], consoleData[10]],
    [videoGameData[6], videoGameData[9]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'James Rodriguez',
    20,
    'Male',
    [languageData[0], languageData[4]], // English, Italian
    [consoleData[11], consoleData[1]],
    [videoGameData[3], videoGameData[4]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Mia Anderson',
    30,
    'Female',
    [languageData[2], languageData[0]], // French, English
    [consoleData[5], consoleData[9]],
    [videoGameData[0], videoGameData[8]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Benjamin Adams',
    28,
    'Male',
    [languageData[0], languageData[1]], // English, Spanish
    [consoleData[4], consoleData[2]],
    [videoGameData[7], videoGameData[6]],
  ),
  createGridData(
    'https://randomuser.me/api/portraits/men/1.jpg',
    'Charlotte Wilson',
    22,
    'Female',
    [languageData[0], languageData[3]], // English, German
    [consoleData[8], consoleData[3]],
    [videoGameData[9], videoGameData[5]],
  ),
]