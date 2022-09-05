import getNotification from './notification';

export const favoriteToys: Set<HTMLElement> = new Set();

export function addFavorites(this: HTMLElement) {
  const countFavoriteToys: HTMLElement | null = document.querySelector('.number-select__inner');
  if (!this.classList.contains('active') && favoriteToys.size < 20) {
    this.classList.add('active');
    favoriteToys.add(this);
  } 
  else if (this.classList.contains('active')) {
    this.classList.remove('active');
    favoriteToys.delete(this);
  } 
  else {
    getNotification();
  }

  if (countFavoriteToys) {
    countFavoriteToys.textContent = (favoriteToys.size).toString();
  }
}

export default addFavorites;