import throttle from 'lodash.throttle';
let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const KEY_DATA = 'feedback-form-state';
const dataObj = JSON.parse(localStorage.getItem(KEY_DATA)) ?? {};

form.addEventListener('input', throttle(inputData, 500));

function inputData(evt) {
  dataObj[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_DATA, JSON.stringify(dataObj));
}

form.addEventListener('submit', submitData);

function submitData(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (email.value === '' || message.value === '') {
    window.alert('Please, fill in all the fields');
  } else {
    console.log(JSON.parse(localStorage.getItem(KEY_DATA)));
    form.reset();
    localStorage.removeItem(KEY_DATA);
    // localStorage.clear();
  }
}

checkSavedData();
function checkSavedData() {
  const savedData = JSON.parse(localStorage.getItem(KEY_DATA));
  if (savedData) {
    input.value = savedData.email ?? "";
    textarea.value = savedData.message ?? "";
  }
}
