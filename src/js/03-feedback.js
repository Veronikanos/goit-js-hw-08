import throttle from 'lodash.throttle';

const formElement = document.querySelector('form.feedback-form');
let formData = {};

const handleInputForm = event => {
  let { name, value } = event.target;
  formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  formData = { ...formData, [name]: value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

getInputFromLS();

function getInputFromLS() {
  const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedObj) {
    console.log(savedObj);
    for (let item in savedObj) {
      formElement.elements[item].value = savedObj[item];
    }
  }
}

function handleSubmitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

formElement.addEventListener('input', throttle(handleInputForm, 500));
formElement.addEventListener('submit', handleSubmitForm);
