const message: string = 'test!';
console.log(message);


document.addEventListener('DOMContentLoaded', () => {
    const modalButton = document.querySelector('.open-modal') as HTMLButtonElement;
    modalButton.addEventListener('click', () => {
        alert('Modal content goes here');
    });
});
