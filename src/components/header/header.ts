import HeaderElement from './header.html'

import setFocus from '../../ts/search';

export class Header {
  async render() {
    return HeaderElement;
  }
  async afterRender () {
    setFocus();
  };
}