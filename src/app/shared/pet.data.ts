export const artists = [
  {
    name: 'trxpics',
    pageUrl: 'https://www.deviantart.com/trxpics',
    avatarUrl: 'https://a.deviantart.net/avatars-big/t/r/trxpics.jpg'
  }
]

export const getArtist = (name: string) => {
  return artists.find(artist => artist.name === name)
}

export const defaultPets = [
  {
    id: 1,
    name: 'Willow',
    species: 'Torasel',
    img: 'grass_1_by_trxpics.png',
    alt: 'Torasel, grass type Fakemon by trxpics',
    type: 'grass',
    artist: getArtist('trxpics')
  }, 
  {
    id: 2,
    name: 'Willow',
    species: 'Toratum',
    img: 'grass_2_by_trxpics.png',
    alt: 'Toratum, grass type Fakemon by trxpics',
    type: 'grass dragon',
    artist: getArtist('trxpics')
  }, 
  {
    id: 3,
    name: 'Willow',
    species: 'Toryumos',
    img: 'grass_3_by_trxpics.png',
    alt: 'Toryumos, grass type Fakemon by trxpics',
    type: 'grass dragon',
    artist: getArtist('trxpics')
  }, {
    id: 4,
    name: 'Charon',
    species: 'Ignish',
    img: 'fire_1_by_trxpics.png',
    alt: 'Ignish, fire type Fakemon by trxpics',
    type: 'fire',
    artist: getArtist('trxpics')
  }, {
    id: 5,
    name: 'Charon',
    species: 'Infeptum',
    img: 'fire_2_by_trxpics.png',
    alt: 'Infeptum, fire type Fakemon by trxpics',
    type: 'fire dragon',
    artist: getArtist('trxpics')
  }, {
    id: 6,
    name: 'Charon',
    species: 'Drafernoom',
    img: 'fire_3_by_trxpics.png',
    alt: 'Drafernoom, fire type Fakemon by trxpics',
    type: 'fire dragon',
    artist: getArtist('trxpics')
  }, {
    id: 7,
    name: 'Bubbles',
    species: 'Aquidin',
    img: 'water_1_by_trxpics.png',
    alt: 'Aquidin, water type Fakemon by trxpics',
    type: 'water',
    artist: getArtist('trxpics')
  }, {
    id: 8,
    name: 'Bubbles',
    species: 'Hyduqua',
    img: 'water_2_by_trxpics.png',
    alt: 'Hyduqua, water type Fakemon by trxpics',
    type: 'water dragon',
    artist: getArtist('trxpics')
  }, {
    id: 9,
    name: 'Bubbles',
    species: 'Hytriaquis',
    img: 'water_3_by_trxpics.png',
    alt: 'Hytriaquis, water type Fakemon by trxpics',
    type: 'water dragon',
    artist: getArtist('trxpics')
  }
]