export type VideoGameType = {
  id: string
  name: string
}

export type VideoGameGenreType = {
  id: string
  name: string
}

export type ConsoleType = {
  id: string
  name: string
  constructor: ConstructorType
}

export type ConstructorType = {
  id: string
  name: string
}

export type LanguageType = {
  id: string
  name: string
}

export type GridType = {
  id : string
  picture : string
  nameUser : string
  age : number
  sex : string
  language : LanguageType[]
  console : ConsoleType[]
  game : VideoGameType[]
}


