import { VideoGameGenreType } from '@/types/appTypes'
import { VideoGameType } from '@/types/appTypes'
import { videoGameGenreData } from '@/data/videoGameGenreData'
import { nanoid } from 'nanoid'

const createVideoGameData = (
  name: string,
  genres: VideoGameGenreType[]
): VideoGameType => {
  return {
    id: nanoid(),
    name,
    genres,
  }
}

export const videoGameData: VideoGameType[] = [
  // PlayStation
  createVideoGameData('Final Fantasy VII', [videoGameGenreData[2], videoGameGenreData[10]]),
  createVideoGameData('Metal Gear Solid', [videoGameGenreData[0], videoGameGenreData[21]]),
  createVideoGameData('Gran Turismo', [videoGameGenreData[9], videoGameGenreData[35]]),
  createVideoGameData('Resident Evil', [videoGameGenreData[11], videoGameGenreData[0]]),
  createVideoGameData('Spyro the Dragon', [videoGameGenreData[14], videoGameGenreData[0]]),

  // PlayStation 2
  createVideoGameData('Shadow of the Colossus', [videoGameGenreData[1], videoGameGenreData[0]]),
  createVideoGameData('God of War', [videoGameGenreData[0], videoGameGenreData[11]]),
  createVideoGameData('Kingdom Hearts', [videoGameGenreData[2], videoGameGenreData[0]]),
  createVideoGameData('Devil May Cry', [videoGameGenreData[0], videoGameGenreData[23]]),
  createVideoGameData('Silent Hill 2', [videoGameGenreData[11], videoGameGenreData[0]]),

  // PlayStation 3
  createVideoGameData('The Last of Us', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('Uncharted 2: Among Thieves', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('LittleBigPlanet', [videoGameGenreData[14], videoGameGenreData[30]]),
  createVideoGameData('Red Dead Redemption', [videoGameGenreData[0], videoGameGenreData[22]]),
  createVideoGameData('Gran Turismo 5', [videoGameGenreData[9], videoGameGenreData[35]]),

  // PlayStation 4
  createVideoGameData('Bloodborne', [videoGameGenreData[0], videoGameGenreData[23]]),
  createVideoGameData('Horizon Zero Dawn', [videoGameGenreData[0], videoGameGenreData[22]]),
  createVideoGameData('Spider-Man', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('God of War', [videoGameGenreData[0], videoGameGenreData[11]]),
  createVideoGameData('Ghost of Tsushima', [videoGameGenreData[0], videoGameGenreData[22]]),

  // PlayStation 5
  createVideoGameData('Demon\'s Souls', [videoGameGenreData[0], videoGameGenreData[23]]),
  createVideoGameData('Ratchet & Clank: Rift Apart', [videoGameGenreData[14], videoGameGenreData[0]]),
  createVideoGameData('Returnal', [videoGameGenreData[0], videoGameGenreData[24]]),
  createVideoGameData('Astro\'s Playroom', [videoGameGenreData[30], videoGameGenreData[14]]),
  createVideoGameData('Sackboy: A Big Adventure', [videoGameGenreData[30], videoGameGenreData[14]]),

  // Xbox
  createVideoGameData('Halo: Combat Evolved', [videoGameGenreData[3], videoGameGenreData[22]]),
  createVideoGameData('Fable', [videoGameGenreData[2], videoGameGenreData[0]]),
  createVideoGameData('Forza Motorsport', [videoGameGenreData[9], videoGameGenreData[35]]),
  createVideoGameData('Project Gotham Racing', [videoGameGenreData[9], videoGameGenreData[35]]),
  createVideoGameData('Ninja Gaiden', [videoGameGenreData[0], videoGameGenreData[23]]),

  // Xbox 360
  createVideoGameData('Gears of War', [videoGameGenreData[0], videoGameGenreData[3]]),
  createVideoGameData('Halo 3', [videoGameGenreData[3], videoGameGenreData[22]]),
  createVideoGameData('Mass Effect', [videoGameGenreData[2], videoGameGenreData[0]]),
  createVideoGameData('Forza Horizon', [videoGameGenreData[9], videoGameGenreData[35]]),
  createVideoGameData('Left 4 Dead', [videoGameGenreData[11], videoGameGenreData[3]]),

  // Xbox One
  createVideoGameData('Gears 5', [videoGameGenreData[0], videoGameGenreData[3]]),
  createVideoGameData('Halo 5: Guardians', [videoGameGenreData[3], videoGameGenreData[22]]),
  createVideoGameData('Sunset Overdrive', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('Quantum Break', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('Sea of Thieves', [videoGameGenreData[0], videoGameGenreData[22]]),

  // Xbox Series X
  createVideoGameData('Halo Infinite', [videoGameGenreData[3], videoGameGenreData[22]]),
  createVideoGameData('Forza Horizon 5', [videoGameGenreData[9], videoGameGenreData[35]]),
  createVideoGameData('The Medium', [videoGameGenreData[11], videoGameGenreData[1]]),
  createVideoGameData('Psychonauts 2', [videoGameGenreData[14], videoGameGenreData[30]]),
  createVideoGameData('Fable (Reboot)', [videoGameGenreData[2], videoGameGenreData[0]]),

  // Switch
  createVideoGameData('The Legend of Zelda: Breath of the Wild', [videoGameGenreData[1], videoGameGenreData[2]]),
  createVideoGameData('Super Mario Odyssey', [videoGameGenreData[14], videoGameGenreData[30]]),
  createVideoGameData('Animal Crossing: New Horizons', [videoGameGenreData[23], videoGameGenreData[16]]),
  createVideoGameData('Splatoon 2', [videoGameGenreData[0], videoGameGenreData[3]]),
  createVideoGameData('Fire Emblem: Three Houses', [videoGameGenreData[0], videoGameGenreData[33]]),

  // Wii
  createVideoGameData('Super Mario Galaxy', [videoGameGenreData[14], videoGameGenreData[30]]),
  createVideoGameData('The Legend of Zelda: Twilight Princess', [videoGameGenreData[1], videoGameGenreData[2]]),
  createVideoGameData('Wii Sports', [videoGameGenreData[6], videoGameGenreData[30]]),
  createVideoGameData('Super Smash Bros. Brawl', [videoGameGenreData[10], videoGameGenreData[0]]),
  createVideoGameData('Donkey Kong Country Returns', [videoGameGenreData[14], videoGameGenreData[0]]),

  // Wii U
  createVideoGameData('Super Mario 3D World', [videoGameGenreData[14], videoGameGenreData[30]]),
  createVideoGameData('The Legend of Zelda: The Wind Waker HD', [videoGameGenreData[1], videoGameGenreData[2]]),
  createVideoGameData('Mario Kart 8', [videoGameGenreData[9], videoGameGenreData[30]]),
  createVideoGameData('Splatoon', [videoGameGenreData[0], videoGameGenreData[3]]),
  createVideoGameData('Bayonetta 2', [videoGameGenreData[0], videoGameGenreData[23]]),

  // Steam Deck
  createVideoGameData('Hades', [videoGameGenreData[23], videoGameGenreData[24]]),
  createVideoGameData('Slay the Spire', [videoGameGenreData[28], videoGameGenreData[23]]),
  createVideoGameData('The Witcher 3: Wild Hunt', [videoGameGenreData[1], videoGameGenreData[2]]),
  createVideoGameData('Cyberpunk 2077', [videoGameGenreData[0], videoGameGenreData[1]]),
  createVideoGameData('Celeste', [videoGameGenreData[14], videoGameGenreData[30]]),

  // PC
  createVideoGameData('Half-Life 2', [videoGameGenreData[1], videoGameGenreData[3]]),
  createVideoGameData('World of Warcraft', [videoGameGenreData[18], videoGameGenreData[2]]),
  createVideoGameData('Dota 2', [videoGameGenreData[5], videoGameGenreData[2]]),
  createVideoGameData('League of Legends', [videoGameGenreData[5], videoGameGenreData[2]]),
  createVideoGameData('Counter-Strike: Global Offensive', [videoGameGenreData[3], videoGameGenreData[22]]),
]
