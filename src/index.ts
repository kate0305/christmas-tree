import './sass/style.scss';
import selfRating from './ts/selfRating';

import { Routes } from './ts/types';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import { Main } from './pages/main/main';
import { Utils } from './utils/utils';
import { Toys } from './pages/toys/toys';
import { Tree } from './pages/tree/tree';

const headerInstance = new Header();
const footerInstance = new Footer();
const mainInstance = new Main();
const toysInstance = new Toys();
const treeInstance = new Tree();

const routes: Routes = {
  '/': mainInstance,
  '/toys': toysInstance,
  '/tree': treeInstance,
};

const router = async () => {
  const header = document.querySelector('.header') as HTMLElement;
  const content = document.querySelector('.main') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  header.innerHTML = await headerInstance.render();
  await headerInstance.afterRender();
  footer.innerHTML = await footerInstance.render();

  const request = Utils.parseRequestURL();

  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  const page = routes[parsedURL];

  content.innerHTML = await page.render();

  await page.afterRender();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
console.log(selfRating);
