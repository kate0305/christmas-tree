import ToysElement from './toys.html'
import link from '../../assets/json/data.json';

import response from '../../ts/response';
import renderToys from '../../ts/render-toys';

export class Toys {
  constructor() {}

  async render() {
    return ToysElement;
  }

  async afterRender() {
    response(link).then(result => renderToys(result)); 
  };
}