import throttle from 'lodash.throttle';

const formElement = document.querySelector('form.feedback-form');
const formData = {};

console.log(formElement.elements);

const handleInputForm = event => {
  // const localObj = localStorage.setItem('formInput', event.target.elements);
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
  // getInputFromLS(formData);
};

// function getInputFromLS(formData){
// 	const savedObj = localStorage.
// }

formElement.addEventListener('input', handleInputForm);
