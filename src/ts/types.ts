import { Main } from "../pages/main/main";
import { Toys } from "../pages/toys/toys";
import { Tree } from "../pages/tree/tree";

export type Routes = {
  [key:string]: Toys | Tree | Main
}

