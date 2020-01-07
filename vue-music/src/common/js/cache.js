import storage from 'good-storage'
const SEARCH_KEY = '_search_'
const SEARCH_MAX_LENGTH = 15

const PLAY_KEY = '_play_'
const PLAY_MAX_LENGTH = 200

const LIKE_KEY = '_favorite_'
const LIKE_MAX_LENGTH = 100

// 如果该数组有该值且排在第一个则不操作，否则，删除该值，插入新值到该数组前面
function insertArray(arr, value, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (!index) return
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(value)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// 搜索历史
export function saveSearch(query) {
  const searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, item => item === query, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
  const searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, item => item === query)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}

// 最近播放
export function savePlay(song) {
  const songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, item => item.id === song.id, PLAY_MAX_LENGTH)
  storage.set(PLAY_KEY, songs)
  return songs
}

export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}

// 收藏歌曲
export function saveFavorite(song) {
  const songs = storage.get(LIKE_KEY, [])
  insertArray(songs, song, item => item.id === song.id, LIKE_MAX_LENGTH)
  storage.set(LIKE_KEY, songs)
  return songs
}

export function loadFavorite() {
  return storage.get(LIKE_KEY, [])
}

export function deleteFavorite(song) {
  const songs = storage.get(LIKE_KEY, [])
  deleteFromArray(songs, item => item.id === song.id)
  storage.set(LIKE_KEY, songs)
  return songs
}
