export type ImageProps = {
  id: string
  _collection_id: string
  name: string
  desc: string
  url: string
  width: number
  height: number
  total_bytes: number
  favorite: boolean
  position: number
  published: boolean
  path?: string
  // created_at:
}

export type ImagesProps = ImageProps[]