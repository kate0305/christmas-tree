import { ToyCard } from "./interfaсes";

export default async function response(url: string): Promise<Array<ToyCard>> {
  const response = await fetch(url);
  const data: Array<ToyCard> = await response.json();
  return data;  
}