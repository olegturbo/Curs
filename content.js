// ============HEADER=============================
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

const deliveryInfo = {
  message: "Aducem orice marfa in Moldova de peste hotare",
  minPrice: 100,
  currencyRates: {
    USD: 16.7,
    EUR: 20
  },
  phone: "+373 (60)-00-000",
  phoneInfo: "Apelurile gratuite in MD"
};

// Creezi elementul pentru info marfa
const pInfoMarfa = document.createElement('p');
pInfoMarfa.className = 'info-marfa';
pInfoMarfa.innerHTML = `${deliveryInfo.message}<br>
Pretul incepe de la ${deliveryInfo.minPrice} de lei pe comanda<br>
1 $ = ${deliveryInfo.currencyRates.USD} MDL | 1 € = ${deliveryInfo.currencyRates.EUR} MDL
<span class="delimiter"></span>`;


// Creezi elementul pentru telefon
const pPhone = document.createElement('p');
pPhone.className = 'phone';
pPhone.innerHTML = `<strong class="strong">${deliveryInfo.phone}</strong><br>${deliveryInfo.phoneInfo}`;


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


btn.addEventListener('click', () => {
  if (!containerBtn.querySelector('.mesaj-trimis')) {
    const mesaj = document.createElement('p');
    mesaj.className = 'mesaj-trimis';
    mesaj.textContent = 'Cererea a fost trimisă cu succes!';

    mesaj.style.color = 'green';
    mesaj.style.fontWeight = '400';
    mesaj.style.paddingRight = '35px';
    mesaj.style.fontFamily = 'Inter,sans-serif';

    containerBtn.appendChild(mesaj);
  }
});



// Inserează headerul înainte de primul copil al .wrapper (dacă vrei să păstrezi ordinea)
wrapper.insertBefore(header, wrapper.firstChild);

// ================== SELECTARE WRAPPER CORECT ==================
const wrappers = document.querySelectorAll('.wrapper');
const mainWrapper = wrappers[1]; // al doilea wrapper


// ================== MAIN INNER ONE ==================
const mainInnerOne = document.createElement('div');
mainInnerOne.className = 'main__inner-one';


// ================= LEFT SIDE =================
const sectionLeft = document.createElement('section');
sectionLeft.className = 'main__inner-left';

const title = document.createElement('h1');
title.className = 'title';

const subtext = document.createElement('h3');
subtext.className = 'subtext';

fetch('./headerText.json')
  .then(res => res.json())
  .then(data => {
    title.innerHTML = data.title;
    subtext.innerHTML = data.subtext;
  })
  .catch(err => console.error("Eroare JSON:", err));

const imgRectangle = document.createElement('img');
imgRectangle.className = 'img-rectlange';
imgRectangle.src = 'img/Rectangle.png';
imgRectangle.alt = 'Rectangle';

sectionLeft.append(title, subtext, imgRectangle);


// ================= RIGHT SIDE (CALCULATOR) =================
const sectionRight = document.createElement('section');
sectionRight.id = 'calculare';
sectionRight.className = 'main__inner-right';

const border = document.createElement('div');
border.className = 'border';

const titleCalculator = document.createElement('h3');
titleCalculator.className = 'title-calculator';
titleCalculator.textContent = 'Calculatorul livrarii';

const subtextCalculator = document.createElement('p');
subtextCalculator.className = 'subtext-calculator';
subtextCalculator.innerHTML = `
Calculează cât va costa expedierea achiziției <br>
tale din străinătate
`;

const form = document.createElement('form');
form.className = 'form';


// ========== INPUT NUME ==========
const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'name';
inputName.placeholder = 'Nume';
inputName.className = 'text';

form.appendChild(inputName);


// ========== CONTAINER COLOANE ==========
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

const colOne = document.createElement('div');
colOne.className = 'colone-one';

const colTwo = document.createElement('div');
colTwo.className = 'colone-two';

// INPUTURI STÂNGA
const inputsLeft = [
  { type: 'email', name: 'email', placeholder: 'Email' },
  { type: 'text', name: 'telefon', placeholder: 'Telefon' },
  { type: 'number', name: 'suprafata', placeholder: 'Suprafață totală, m²' },
  { type: 'number', name: 'greutate', placeholder: 'Greutate, kg' }
];

inputsLeft.forEach(data => {
  const input = document.createElement('input');
  input.type = data.type;
  input.name = data.name;
  input.placeholder = data.placeholder;
  input.className = 'input';
  colOne.appendChild(input);
});

// INPUTURI DREAPTA
const inputsRight = [
  { name: 'tara', placeholder: 'Țara de achiziție' },
  { name: 'oras_cumparare', placeholder: 'Orașul de cumpărare' },
  { name: 'zona_livrare', placeholder: 'Zona de livrare' },
  { name: 'oras_livrare', placeholder: 'Orașul de livrare' }
];

inputsRight.forEach(data => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = data.name;
  input.placeholder = data.placeholder;
  input.className = 'input';
  colTwo.appendChild(input);
});

formContainer.append(colOne, colTwo);
form.appendChild(formContainer);


// ================= BUTON =================
const btnCalculator = document.createElement('button');
btnCalculator.type = 'button';
btnCalculator.className = 'btn btn-calculator';
btnCalculator.textContent = 'Comanda o calculare';


// ================= REZULTAT =================
const result = document.createElement('div');
result.className = 'calculator-result';
result.style.marginTop = '15px';
result.style.paddingLeft = "35px";
result.style.fontWeight = 'bold';


// ================= LOGICA CALCULATOR =================
btnCalculator.addEventListener('click', () => {

  const greutate = parseFloat(form.querySelector('[name="greutate"]').value) || 0;
  const suprafata = parseFloat(form.querySelector('[name="suprafata"]').value) || 0;

  if (greutate <= 0) {
    result.style.fontFamily = 'Inter,sans-serif';
    result.textContent = "Introduceți greutatea corectă!";
    result.style.color = "red";
    return;
  }

  // FORMULA EXEMPLU:
  // 100 lei bază + 50 lei/kg + 20 lei/m²
  const basePrice = 100;
  const pricePerKg = 50;
  const pricePerM2 = 20;

  const total = basePrice + (greutate * pricePerKg) + (suprafata * pricePerM2);

  result.style.fontFamily = 'Inter,sans-serif';
  result.style.color = "green";
  result.textContent = `Cost estimativ livrare: ${total.toFixed(2)} MDL`;
});


// ================= ASAMBLARE =================
border.append(
  titleCalculator,
  subtextCalculator,
  form,
  btnCalculator,
  result
);

sectionRight.appendChild(border);

mainInnerOne.append(sectionLeft, sectionRight);

// INSERARE ÎN WRAPPER CORECT
mainWrapper.insertBefore(mainInnerOne, mainWrapper.firstChild);
