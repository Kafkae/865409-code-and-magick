'use strict';

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var namesWizards = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var surnamesWizards = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];

var getRandomArrayItem = function (arr) {
  return arr[Math.random() * arr.length | 0];
};

var getListWizards = function () {
  var wizardsArr = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {
      'name': getRandomArrayItem(namesWizards) + ' ' + getRandomArrayItem(surnamesWizards),
      'coatColor': getRandomArrayItem(coatColors),
      'eyesColor': getRandomArrayItem(eyesColors)
    };
    wizardsArr.push(wizard);
  }
  return wizardsArr;
};

wizards = getListWizards();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderwizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderwizard();
