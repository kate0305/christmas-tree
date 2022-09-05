import addFavorites from "./add-favorites";
import { ToyCard } from "./interfaсes";

export default function renderToys(data: Array<ToyCard>): void {
  const toysContainer: HTMLElement | null = document.querySelector('.toys-wrapper');
  if (toysContainer) {
    data.map(i => {
      const container: HTMLElement = document.createElement('div');
      container.classList.add('toy-card');
      container.setAttribute('data-num', `${i.num}`);
      toysContainer.append(container);

      const title: HTMLElement = document.createElement('h3');
      title.classList.add('toy-card__title');
      title.textContent = i.name;
      container.append(title);

      const containerDescrip: HTMLElement = document.createElement('div');
      containerDescrip.classList.add('toy-card__description');
      container.append(containerDescrip);

      const img = `<img class="toy-card__img" src="./assets/toys/${i.num}.png" alt="toy">`;
      title.insertAdjacentHTML('afterend', img);

      const button: HTMLElement = document.createElement('button');
      button.classList.add('toy-card__favorite');
      button.textContent = 'в избранное';
      containerDescrip.insertAdjacentElement('afterend', button);

      const toyCard = `
          <p class="toy-card__numb">Количество:<span class="toy-card__span">${i.count}</span></p>
          <p class="toy-card__year">Год покупки:<span class="toy-card__span">${i.year}</span></p>
          <p class="toy-card__snape">Форма:<span class="toy-card__span">${i.shape}</span></p>
          <p class="toy-card__color">Цвет:<span class="toy-card__span">${i.color}</span></p>
          <p class="toy-card__size">Размер:<span class="toy-card__span">${i.size}</span></p>
          <p class="toy-card__like">Любимая:<span class="toy-card__span">${i.favorite === 'false' ? i.favorite = 'нет' : i.favorite = 'да'}</span></p>
      `
      containerDescrip.insertAdjacentHTML('beforeend', toyCard);
  
      container.addEventListener('click', addFavorites);
    });
  }
}


