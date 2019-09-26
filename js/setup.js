'use strict';

// данные о волшебниках
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// устанавливаем видимость окон
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Эта маленькая строка кода будет обращаться к случайному элементу в массиве, генерируя случайное число с плавающей точкой от нуля до длины массива и округляя его до ближайшего целого числа
var randomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// функция создания объекта с рандомными параметрами волшебников
var randomGenerateWizard = function () {
  var wizard = {
    name: randomElement(WIZARD_NAMES) + '\n' + randomElement(WIZARD_SURNAMES),
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

var fragment = document.createDocumentFragment();

// выводить не больше 4 елементов
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(randomGenerateWizard()));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
