const wrapper = document.querySelector('.wrapper');

// Creare header
const header = document.createElement('header');
header.className = 'header';

// Containerul din dreapta header
const headerInnerRight = document.createElement('div');
headerInnerRight.className = 'header__inner-right';

// Figure cu logo-ul
const figure = document.createElement('figure');
figure.className = 'right-caption';

const imgLogo = document.createElement('img');
imgLogo.src = 'img/logo.svg';
imgLogo.alt = 'logo';

const figcaption = document.createElement('figcaption');
figcaption.className = 'description-logo';
figcaption.textContent = 'FromBoard Delivery';

figure.appendChild(imgLogo);
figure.appendChild(figcaption);

// Navigația
const nav = document.createElement('nav');
nav.className = 'navbar';

const linksData = [
  { href: '#calculare', text: 'Calculator' },
  { href: '#Despre', text: 'Despre' },
  { href: '#garantie', text: 'Garantie' },
  { href: '#recenzii', text: 'Recenzii' }
];

linksData.forEach(linkInfo => {
  const a = document.createElement('a');
  a.className = 'navigation';
  a.href = linkInfo.href;
  a.textContent = linkInfo.text;
  nav.appendChild(a);
});

headerInnerRight.appendChild(figure);
headerInnerRight.appendChild(nav);

// Containerul din stânga header
const headerContainerLeft = document.createElement('div');
headerContainerLeft.className = 'header__container-left';

const headerInnerLeft = document.createElement('div');
headerInnerLeft.className = 'header__inner-left';

const pInfoMarfa = document.createElement('p');
pInfoMarfa.className = 'info-marfa';
pInfoMarfa.innerHTML = `Aducem orice marfa in Moldova de peste hotare<br> Pretul incepe de la 100 de lei pe comanda<br>1 $ = 16.70 MDL | 1 € = 20 MDL<span class="delimiter"></span>`;

const pPhone = document.createElement('p');
pPhone.className = 'phone';
pPhone.innerHTML = `<strong class="strong">+373 (60)-00-000 </strong><br>Apelurile gratuite in MD`;

headerInnerLeft.appendChild(pInfoMarfa);
headerInnerLeft.appendChild(pPhone);

const containerBtn = document.createElement('div');
containerBtn.className = 'container-btn';

const btn = document.createElement('button');
btn.className = 'btn';
btn.textContent = 'Lasă o cerere';

containerBtn.appendChild(btn);

headerContainerLeft.appendChild(headerInnerLeft);
headerContainerLeft.appendChild(containerBtn);

header.appendChild(headerInnerRight);
header.appendChild(headerContainerLeft);

// Inserează headerul înainte de primul copil al .wrapper (dacă vrei să păstrezi ordinea)
wrapper.insertBefore(header, wrapper.firstChild);
