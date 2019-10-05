'use strict';

// данные о волшебниках
var WIZARD_COUNT = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// устанавливаем видимость окон
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция удаления дпо. класса
var deleteClass = function (selectorName, className) {
  var userDialog = document.querySelector(selectorName);
  return userDialog.classList.remove(className);
};

// вызываем функцию и удаляем класс у окна настроек персонажа
deleteClass('.setup', 'hidden');
// вызываем функцию и удаляем класс у окна похожих персонажей
deleteClass('.setup-similar', 'hidden');


// Эта маленькая строка кода будет обращаться к случайному элементу в массиве, генерируя случайное число с плавающей точкой от нуля до длины массива и округляя его до ближайшего целого числа
var randomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// функция создания объекта с рандомными параметрами волшебников
var randomGenerateWizard = function () {
  var wizard = {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES),
    coatColor: randomElement(WIZARD_COAT_COLORS),
    eyesColor: randomElement(WIZARD_WIZARD_EYES_COLORS)
  };
  return wizard;
};

// находим блоки с нужными классами в шаблоне и записываем в них параметры из функции randomGenerateWizard
var renderWizard = function (wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// перебор массива волшебников
var getWizardsArray = function (wizardsCount) {
  var wizardsArray = [];
  for (var i = 0; i < wizardsCount; i++) {
    wizardsArray.push(randomGenerateWizard());
  }
  return wizardsArray;
};

// функция отрисовки похожих волшебников
var createSimilarWizard = function (wizardSimilar) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardSimilar.length; i++) {
    fragment.appendChild(renderWizard(wizardSimilar[i]));
  }
  similarListElement.appendChild(fragment);
};

var wizardsCountSimilar = getWizardsArray(WIZARD_COUNT);
createSimilarWizard(wizardsCountSimilar);
