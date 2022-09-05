function getNotification() {
  const modal = document.querySelector('.modal') as HTMLElement;
  const closeBtn = document.querySelector('.modal__close') as HTMLElement;
  modal.classList.remove('hidden');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
}

export default getNotification;