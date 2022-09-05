import { favoriteToys } from "./add-favorites";
import link from '../assets/json/data.json';
import response from "./response";
let toyCount: string[] = [];
 
export default async function getFavoriteToys() {
  await response(link).then(result => {
    result.map(i => {
      toyCount.push(i.count);
    })});

  const countFavoriteToys = document.querySelector('.number-select__inner') as HTMLElement;
  const favoriteContainer = document.querySelectorAll('.favorite-items__item');
  if (!favoriteToys.size) {
    favoriteContainer.forEach((item, index) => {
      const favoriteCart = document.createElement('img');
      favoriteCart.classList.add('item__img');
      favoriteCart.src = `assets/toys/${index + 1}.png`;
      item.append(favoriteCart);

      const favoriteCount = document.createElement('p');
      favoriteCount.classList.add('item__count');
      favoriteCount.innerText = `${toyCount[index]}`;
      item.append(favoriteCount); 
    });
  } else {
    countFavoriteToys.textContent = (favoriteToys.size).toString();
    let size = favoriteToys.size - 1;
    
    favoriteToys.forEach((value) => {
      const imgNum = value.dataset.num;
      const index = toyCount[Number(imgNum)];
      
      const favoriteCart = document.createElement('img');
      favoriteCart.classList.add('item__img');
      favoriteCart.src = `assets/toys/${imgNum}.png`;
      
      const favoriteCount = document.createElement('p');
      favoriteCount.classList.add('item__count');
      favoriteCount.innerText = `${toyCount[Number(index)]}`;
      favoriteContainer[size].append(favoriteCount);
      favoriteContainer[size].append(favoriteCart);
      size--;
    });
  }
}
  


