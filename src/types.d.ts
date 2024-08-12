export interface Sub {
  id: number,
  name: string,
  avatar: string,
  description: string,
}

export type SubsResponseFromApi = {
  data: {
    results: Array<{
      id: number
      name: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
    }>
  }
}
