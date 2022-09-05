export default function setFocus(): void {
  const seachInput: HTMLInputElement | null = document.querySelector('.search');

  if (seachInput) {
    seachInput.addEventListener('focus', () => seachInput.placeholder = 'введите название игрушки');
    
    seachInput.addEventListener('blur', () => {
      seachInput.placeholder = '';
      seachInput.value = '';
    });
  }
}



