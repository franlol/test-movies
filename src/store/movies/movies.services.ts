import { api } from "../../api/api"

export function getMovie<T>() {
  return api<T>('https://tmdb.api.com/?movie=TODO');
}
