// import '../css/03-feedback.css';
// import '../css/common.css';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),

}
messageOutput();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) { 
    evt.preventDefault();

    console.log('Відправляємо форму');

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-msg');
}


function onTextareaInput(evt) { 
    const massage = evt.currentTarget.value;
    localStorage.setItem('feedback-msg', massage);
}


function messageOutput() { 
    const savedMessage = localStorage.getItem('feedback-msg');
    if (savedMessage) {
        refs.textarea.value = savedMessage;


     }
}
