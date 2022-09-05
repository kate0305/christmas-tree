 function createSnowflake() {
  const snowContainer = document.querySelector('.xmas-tree__snow') as HTMLElement;
  const snowflake = document.createElement('i') as HTMLElement;
  snowflake.classList.add('fas');
  snowflake.classList.add('fa-snowflake');
  snowflake.style.left = `${Math.random() * 711}px`;
  snowflake.style.animationDuration = `${Math.random() * (20 - 10) + 10}s`;
  snowflake.style.opacity = (Math.random()).toString();
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  snowContainer.append(snowflake)

  setTimeout(() => snowflake.remove(), 10000);
}

function runSnow() {
  const snowContainer = document.querySelector('.xmas-tree__snow') as HTMLElement;
  snowContainer.classList.toggle('active');
      const snowing = setInterval(() => {
        if (snowContainer.classList.contains('active')) {
          createSnowflake()
        } else {
          clearInterval(snowing);
        }
      }, 200);
}
export default runSnow