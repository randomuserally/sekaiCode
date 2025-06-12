let i;

document.addEventListener('DOMContentLoaded', () =>{
    codeField = document.getElementById('generated')
    externalHTML = document.getElementById('gen')
    i = 0;
})

function genCode() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const allChars = [...letters, ...numbers];

    let field = 'GC';
    
    for (let i = 0; i < 16; i++) {
        field += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    let fieldArray = field.split('');
    
    if (!/[A-Z]/.test(field.slice(2))) {
        const randomPos = Math.floor(Math.random() * 16) + 2;
        fieldArray[randomPos] = letters[Math.floor(Math.random() * letters.length)];
    }
    
    if (!/[0-9]/.test(field.slice(2))) {
        let randomPos;
        do {
            randomPos = Math.floor(Math.random() * 16) + 2;
        } while (fieldArray[randomPos] !== field[randomPos]); 
        
        fieldArray[randomPos] = numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    codeField.innerHTML = fieldArray.join('');
}