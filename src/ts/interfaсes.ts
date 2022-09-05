export interface ToyCard {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: string
}

export interface Request {
  resource: string | null,
  id: string | null,
  verb: string | null,
}