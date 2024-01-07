const userName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


userName.addEventListener('input', () => {
    const name = userName.value.trim();
    nameOutput.textContent = name || 'Anonymous';
        userText.innerHTML = `${name}`;
})



//На елементі input#name-input прослуховується подія input
//Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
//Значення в інпуті очищене від пробілів по краях
//Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"
// Значення в інпуті очищене від пробілів по краях - trim().


