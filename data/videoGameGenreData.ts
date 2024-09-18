import { VideoGameGenreType } from '@/types/appTypes'
import { nanoid } from 'nanoid'

const createVideoGameGenreData = (name: string) => {
  return {
    id: nanoid(),
    name,
  }
}

export const videoGameGenreData: VideoGameGenreType[] = [
  createVideoGameGenreData('Action'),
  createVideoGameGenreData('Adventure'),
  createVideoGameGenreData('RPG'),
  createVideoGameGenreData('Shooter'),
  createVideoGameGenreData('Simulation'),
  createVideoGameGenreData('Strategy'),
  createVideoGameGenreData('Sports'),
  createVideoGameGenreData('Puzzle'),
  createVideoGameGenreData('Idle'),
  createVideoGameGenreData('Racing'),
  createVideoGameGenreData('Fighting'),
  createVideoGameGenreData('Horror'),
  createVideoGameGenreData('Music'),
  createVideoGameGenreData('Party'),
  createVideoGameGenreData('Platformer'),
  createVideoGameGenreData('Sandbox'),
  createVideoGameGenreData('Survival'),
  createVideoGameGenreData('MMO'),
  createVideoGameGenreData('Metroidvania'),
  createVideoGameGenreData('Battle Royale'),
  createVideoGameGenreData('Stealth'),
  createVideoGameGenreData('Open World'),
  createVideoGameGenreData('Roguelike'),
  createVideoGameGenreData('Rhythm'),
  createVideoGameGenreData('Visual Novel'),
  createVideoGameGenreData('Dating Sim'),
  createVideoGameGenreData('Educational'),
  createVideoGameGenreData('Card'),
  createVideoGameGenreData('Board'),
  createVideoGameGenreData('Trivia'),
  createVideoGameGenreData('Casual'),
  createVideoGameGenreData('Arcade'),
  createVideoGameGenreData('Puzzle Platformer'),
  createVideoGameGenreData('Action RPG'),
  createVideoGameGenreData('Turn-Based Strategy'),
  createVideoGameGenreData('Real-Time Strategy'),
  createVideoGameGenreData('Tactical RPG'),
  createVideoGameGenreData('Roguelite'),
  createVideoGameGenreData('Tower Defense'),
  createVideoGameGenreData('Idle RPG'),
  createVideoGameGenreData('Idle Clicker'),
]
