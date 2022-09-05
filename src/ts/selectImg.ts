export function selectImg(container: NodeList, elem: HTMLImageElement) {
  container.forEach((i, index) => {
    i.addEventListener('click', () => {
      elem.src = `assets/tree/${index + 1}.png`
    });
  });
}

export function selectBg(container: NodeList, elem: HTMLElement) {
  container.forEach((i, index) => {
    i.addEventListener('click', () => {
      elem.style.backgroundImage = `url(assets/bg/${index + 1}.jpg)`;
    });
  });
}
