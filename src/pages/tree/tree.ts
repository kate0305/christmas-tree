import TreeElement from './tree.html'
import runSnow from '../../ts/createSnowflake';
import playSong from '../../ts/playSong';
import { selectImg, selectBg } from '../../ts/selectImg';
import getFavoriteToys from '../../ts/getFavoriteToys';

export class Tree {
  constructor() {}

  async render() {
    return TreeElement;
  }

  async afterRender() {
    const btnSnow = document.querySelector('.snow') as HTMLElement;
    const audioBtn = document.querySelector('.music') as HTMLElement;
    const treeContainer = document.querySelectorAll('.tree-items__item');
    const imgTree = document.querySelector('.xmas-tree__img') as HTMLImageElement;
    const bgContainer = document.querySelectorAll('.bg-items__item');
    const imgBg = document.querySelector('.xmas-tree') as HTMLImageElement;

    btnSnow.addEventListener('click', runSnow);
    audioBtn.addEventListener('click', playSong)

    selectImg(treeContainer, imgTree);

    selectBg(bgContainer, imgBg)

    getFavoriteToys();
  }
  
}