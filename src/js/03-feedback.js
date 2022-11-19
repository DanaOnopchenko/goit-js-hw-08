import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form input')
}

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500))

//     // console.log(formData)

messageOutput();

function onFormSubmit(evt) { 
    evt.preventDefault();

    console.log('Відправляємо форму');
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt){ 
    formData[evt.target.name] = evt.target.value;
    const formDataJSON = JSON.stringify(formData);
     localStorage.setItem(STORAGE_KEY, formDataJSON )
}


function messageOutput() { 
    const savedMessageFormData = localStorage.getItem(STORAGE_KEY);
    console.log(savedMessageFormData )
    if (savedMessageFormData) {
        formData = JSON.parse(savedMessageFormData);
        refs.input.value = formData.email;
        refs.textarea.value = formData.message;
     }
}
