const formEl = document.querySelector('.login-form');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

   
    // if (inputEl.value == "") {
    //     alert('Усі поля мають бути заповненні!')
    //     return
        
    // }

    const email = formEl.email.value;
    const password = formEl.password.value;
    if (!email || !password) {
        alert('Усі поля мають бути заповненні!')
        return
    }

    

    const formData = new FormData(event.currentTarget);
    
    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name)
        console.log('onFormSubmit -> value', value)
        
        formEl.reset();
        
    })


}

