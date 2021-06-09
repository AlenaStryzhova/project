"use strict";

// Ссылки на картинки
const img = {
  back: 'https://i.ibb.co/dkXLDQg/untitled.png', // Фон
  toolsBack: 'https://i.ibb.co/BtX11HK/image.jpg', // Фон футера
  cont: 'https://i.ibb.co/ZKY5dMP/image.png', // Контайнмент

  react: 'https://i.ibb.co/xXDYBH5/image.png', // Реактор
  generat: 'https://i.ibb.co/7gPkJvw/image.png', // Генератор 
  powerLine: 'https://i.ibb.co/7Ch2nnf/image.png', // ЛЭП 
  steamGen: 'https://i.ibb.co/jR8LV3H/image.png', // Парогенератор 
  transf: 'https://i.ibb.co/6n3ZbvS/image.png', // Трансформатор
  turb: 'https://i.ibb.co/Msvhwbr/image.png', // Турбина
  cond: 'https://i.ibb.co/WfXkX8X/image.png', // Конденсатор 
  cooler: 'https://i.ibb.co/Sy1GGXW/image.png', // Градирня

  cityOFF: 'https://i.ibb.co/bNfYtjM/image.png', //В городе нет света
  cityON: 'https://i.ibb.co/kmmYgHh/image.png', //В городе есть свет
  fail: 'https://i.ibb.co/st95Grt/image.png', //Взрыв
};

// Размеры картинок на складе
var wid = {};
if (window.innerWidth > 360 && window.screen.width > 360) {
  wid = {
    react: '5%',
    steamGen: '10%',
    turb: '10%',
    generat: '10%',
    powerLine: '8%',
    transf: '10%',
    cond: '10%',
    cooler: '8%',

  };
} else {
  wid = {
    react: '20px',
    steamGen: '50px',
    turb: '50px',
    generat: '75px',
    powerLine: '40px',
    transf: '50px',
    cond: '50px',
    cooler: '40px',
  };
}

// Описание оборудования
const desc = {
  react: 'Ядерный реактор - преобразует энергию деления ядерного топлива в тепловую, нагревая при этом теплоноситель (воду) 1 контура до высоких температур (гораздо больше 100 градусов цельсия, однако высокое давление в первом контуре не позволяет теплоносителю закипать). Располагается в контайнменте.', // Реактор
  steamGen: 'Парогенератор - теплообменный аппарат для производства водяного пара с давлением выше атмосферного за счёт передачи тепловой энергии от теплоносителя 1 контура, поступающего из ядерного реактора.', //Парогенератор
  turb: 'Паровая турбина - тепловой двигатель, в котором энергия пара, поступающего от парогенератора, преобразуется в механическую работу. В лопаточном аппарате паровой турбины потенциальная энергия сжатого и нагретого водяного пара преобразуется в кинетическую (вращение ротора турбины).',//Турбина
  generat: 'Электрический генератор - устройство, в котором механическая энергия вращения ротора преобразуется в электрическую энергию.', //Генератор
  powerLine: 'Линия электропередачи (ЛЭП) - система энергетического оборудования, предназначенная для передачи электроэнергии на дальние расстояия.', //ЛЭП
  transf: 'Электротрансформатор - преобразует напряжение тока, поступающего от электрогенератора, в требуемое, для передачи тока по ЛЭП потребителям.', //Трансформатор
  cond: 'Конденсатор - теплообменник, в котором осуществляется процесс конденсации пара, поступающего из турбины (процесс фазового перехода теплоносителя из парообразного состояния в жидкое за счёт отвода тепла более холодным теплоносителем - поступающим от Градирни). Сконденсированная вода с помощью насоса поступает в Парогенератор.', //Конденсатор 
  cooler: 'Градирня - устройство для охлаждения большого количества воды направленным потоком атмосферного воздуха. Иногда градирни называют также охладительными башнями. ', //Градирня 
  cont: 'Герметичная оболочка (Контайнмент) — пассивная система безопасности энергетических ядерных реакторов, главной функцией которой является предотвращение выхода радиоактивных веществ в окружающую среду при тяжёлых авариях.',
};

// Фон
var back = document.getElementById('back');
back.style.backgroundImage = `url(\'${img.back}\')`;

// Город
var city = document.getElementById('city');
city.setAttribute("src", `${img.cityOFF}`);
var cityLep = document.getElementById('cityLEP');
cityLep.setAttribute("src", `${img.powerLine}`);


// Табличка с описание оборудования
var description = document.getElementById('desc');
description.innerHTML = 'Здесь будет информация об оборудовании...';

// Инструментарий
var toolsBack = document.getElementById('toolsBack');
toolsBack.style.backgroundImage = `url(\'${img.toolsBack}\')`;

// Cклад оборудования
var storage = document.getElementById('storage');
storage.setAttribute("ondrop", "divDrop(event)");
storage.setAttribute("ondragover", "storDrop(event)");
storage.setAttribute("ontouchstart", "storTouch(event)");

// Кнопка старта
var start = document.getElementById('start');
start.setAttribute("onclick", 'startFunc()');

// Кнопка сброса
var reset = document.getElementById('reset');
reset.setAttribute("onclick", 'resetFunc()');

// Контайнмент
var cont = document.getElementById('cont');
cont.style.backgroundImage = `url(\'${img.cont}\')`;
cont.setAttribute('onclick', 'equipClik(event)');
cont.setAttribute("title", "Линии электропередач");

// Блоки для оборудования 
var blocks = document.getElementsByClassName('block');
for (let i = 0; i < blocks.length; i++) {
  blocks[i].setAttribute("ondrop", "divDrop(event)");
  blocks[i].setAttribute("ondragover", "divDragOver(event)");
  blocks[i].setAttribute("ontouchstart", "divTouch(event)");
}

// Оборудование
var equip = document.getElementsByClassName('equipment');
for (let i = 0; i < equip.length; i++) {
  equip[i].setAttribute('ondragstart', 'equipDragStart(event)');
  equip[i].setAttribute('ondragend', 'equipDragEnd(event)');
  equip[i].setAttribute('onclick', 'equipClik(event)');
  equip[i].setAttribute('ontouchstart', 'touchEquip(event)');

  equip[i].setAttribute('src', `${img[equip[i].id]}`);
  equip[i].style.width = wid[equip[i].id];
  equip[i].style.maxHeight = '100%';
}
// Вызов описания оборудования
function equipClik(EO) {
  EO = EO || window.event;
  description.innerHTML = `${desc[EO.target.id]}`;
}

// Перетаскивание мышью с компьютера
var draggedEquip = null;

function equipDragStart(EO) {
  EO = EO || window.event;
  draggedEquip = EO.target;
}

function equipDragEnd(EO) {
  EO = EO || window.event;
  draggedEquip = null;
}

function divDragOver(EO) {
  EO = EO || window.event;
  EO.preventDefault();
}

function divDrop(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  if (!EO.currentTarget.childNodes.length) {
    EO.currentTarget.appendChild(draggedEquip);
    draggedEquip.style.width = '100%';
  }
}

function storDrop(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  EO.currentTarget.appendChild(draggedEquip);
  draggedEquip.style.width = wid[draggedEquip.id];
}

// Работа на сенсорном экране (Увы, только через 'клики' на тачскрине)
var touchedEquip = null;
var unTouchedEquip = null;

function touchEquip(EO) {
  EO = EO || window.event;
  var touch = EO.target || EO.srcElement;
  if (touch.className != 'equipment') return;

  touch.ontouchend = function (EO) {
    if (touchedEquip == null) {
      touchedEquip = touch;
      touchedEquip.style.border = '3px dotted green';
      navigator.vibrate(20);
    } else {
      unTouchedEquip = touchedEquip;
      unTouchedEquip.style.border = 'none';
      touchedEquip = touch;
      touchedEquip.style.border = '3px dotted green';
      navigator.vibrate(20);
    }
  }
}

function divTouch(EO) {
  EO = EO || window.event;
  var touchDiv = EO.target || EO.srcElement;
  document.ontouchend = function () {
    if (touchedEquip == null) return;
    if (!touchDiv.childNodes.length) {
      touchDiv.appendChild(touchedEquip);
      touchedEquip.style.width = '100%';
      touchedEquip.style.border = 'none';
      touchedEquip = null;
      navigator.vibrate(20);
    }
  }
}

function storTouch(EO) {
  EO = EO || window.event;
  var touchStor = EO.target || EO.srcElement;
  document.ontouchend = function () {
    if (touchedEquip == null) return;
    touchStor.appendChild(touchedEquip);
    touchedEquip.style.width = wid[touchedEquip.id];
    touchedEquip.style.border = 'none';
    touchedEquip = null;
    navigator.vibrate(20);
  }
}



// Функция СТАРТА
var timerRotation = null;
function startFunc() {
  var blocks = document.getElementsByClassName('block');
  var a = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].firstChild && blocks[i].id == blocks[i].firstChild.id + 'Div') {
      a += 1;
    }
  }
  if (a == blocks.length) { // Победа
    console.log('WIN');
    //Включаем город
    city.setAttribute("src", `${img.cityON}`);
    //Запускаем вентиляторы
    timerRotation = setInterval(rotateBlades, 10);
    let timerWinWindow = setTimeout(winWindowFunc, 2000);

  } else if (storage.children.length) {
    description.innerHTML = `!!!Склад должен остаться пустой!!!`;
  } else { // Проигрыш
    timerRotation = setInterval(rotateBlades, 10);
    let timerFailWindow = setTimeout(failWindowFunc, 2000);
  }
}


// Функция сброса
function resetFunc() {
  console.log('RESETUEM');
  var equip = document.getElementsByClassName('equipment');
  let i = 0; var pack = [];
  for (i = 0; i < equip.length; i++) {
    if (equip[i].parentElement.id != 'storage') {
      pack.push(equip[i]);
      equip[i].style.width = wid[equip[i].id];
    };
  }
  for (let j = 0; j < pack.length; j++) {
    storage.appendChild(pack[j]);
  };
}

//Функция вращения роторов
var angle = 0;
var blades = document.getElementsByClassName('blade');
function rotateBlades() {
  angle += 10;
  blades[0].style.transformOrigin = '18.6% 80%';
  blades[0].style.transform = `rotate(${angle}deg)`;
  blades[1].style.transformOrigin = '30% 80%';
  blades[1].style.transform = `rotate(${angle}deg)`;
  blades[2].style.transformOrigin = '50% 80%';
  blades[2].style.transform = `rotate(${angle}deg)`;
  blades[3].style.transformOrigin = '54% 84%';
  blades[3].style.transform = `rotate(${angle}deg)`;
}

// Победное окно
function winWindowFunc() {
  var winWindow = document.createElement('div');
  winWindow.setAttribute("class", "endWindow");
  document.body.appendChild(winWindow);

  var winText = document.createElement('p');
  winText.setAttribute("class", "endText");
  winText.innerHTML = `Поздравляем! Вы построили атомную станцию!`;
  winWindow.appendChild(winText);

  var winButton = document.createElement('button');
  winButton.setAttribute("class", "endButton");
  winButton.setAttribute("onclick", "restart()");
  winButton.innerHTML = "Ещё раз!";
  winWindow.appendChild(winButton);

  navigator.vibrate(500);
}

// Проигрышное окно
function failWindowFunc() {
  var failWindow = document.createElement('div');
  failWindow.setAttribute("class", "endWindow");
  document.body.appendChild(failWindow);

  var failText = document.createElement('p');
  failText.setAttribute("class", "endText");
  failText.innerHTML = `Упс! Что-то пошло не так. Попробуйте заново!`;
  failWindow.appendChild(failText);

  var failImgDiv = document.createElement('div');
  failImgDiv.setAttribute("class", "failImgDiv");
  failWindow.appendChild(failImgDiv);

  var failImg = document.createElement('img');
  failImg.setAttribute("class", "failImg");
  failImg.setAttribute("src", `${img.fail}`);
  failImgDiv.appendChild(failImg);

  var failButton = document.createElement('button');
  failButton.setAttribute("class", "endButton");
  failButton.setAttribute("onclick", "restart()");
  failButton.innerHTML = "Заново!";
  failWindow.appendChild(failButton);

  navigator.vibrate(1000);
}

// Перезапуск игры
function restart() {
  document.body.removeChild(document.body.lastChild);
  clearTimeout(timerRotation);
  city.setAttribute("src", `${img.cityOFF}`);
  resetFunc();
}

// Стартовое окно
function startWindowFunc() {
  var startWindow = document.createElement('div');
  startWindow.setAttribute("class", "endWindow");
  document.body.appendChild(startWindow);

  var startText = document.createElement('p');
  startText.setAttribute("class", "startText");
  startText.innerHTML = `Добрый день! Данная игра предназначена для ознакомления с основными элементами и принципами работы атомной электростанции с реактором ВВЭР. В ней необходимо поставить каждое оборудование на правильное место (при работе с ПК - методом перетаскивания мышью в ячейки, для телефонов - методом нажатия сначала на необходимое оборудование, а затем на необходимую ячейку). Кнопка RESET (или Esc) очистит площадку. Кнопка START (или Enter) запустит Вашу АЭС, но чтобы всё работало безаварийно необходимо правильно расставить оборудование. Внимательно читайте описание оборудования (будет отображаться на табличке сверху)! Начнём?`;
  startWindow.appendChild(startText);

  var startButton = document.createElement('button');
  startButton.setAttribute("class", "startButton");
  startButton.setAttribute("onclick", "goFunc()");
  startButton.innerHTML = "Начнём!";
  startWindow.appendChild(startButton);
}

startWindowFunc();

// Кнопка начала игры
function goFunc() {
  document.body.removeChild(document.body.lastChild); // не понимаю, почему, но срабатывает только после 2 раза
  document.body.removeChild(document.body.lastChild);
  console.log("работает");
}

window.onbeforeunload = function () {
  return true;
};

// Клавиатура

document.addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    startFunc();
  } else if (event.code == 'Escape') {
    restartFunc();
  }
});