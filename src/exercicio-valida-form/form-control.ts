import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    shouldSendForm(this) ? console.log('Form sent') : console.log('Form not sent');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value) showErrorMessage(input, 'This field is required');
    });
}

function checkEmail(email: HTMLInputElement) {
    if (!isEmail(email.value)) {
        showErrorMessage(email, 'Invalid email address');
    }
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Passwords do not match');
        showErrorMessage(password2, 'Passwords do not match');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES),
    );
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
    errorMessage.innerText = message;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => {
        if (item.classList.contains(SHOW_ERROR_MESSAGES)) {
            send = false;
        }
    });
    return send;
}
