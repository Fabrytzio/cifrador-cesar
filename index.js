const resultado = document.querySelector('#resultado');
const inputForm = document.getElementById("input");
const form = document.querySelector('form');

const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

const separateWords = str => [...str.toLowerCase().split('')];

const changeOrder = ( x, counter = 0 ) => {
    let index = alpha.indexOf( x );
    if ( counter >= 10 ) return alpha[ index ];
    index++;
    if( index == '' ) return ' ';
    if( index >= 27 ) index = 0;
    return changeOrder( alpha[index], counter + 1 );
}

const encrypt = str => separateWords( str ).map(char => changeOrder( char ) ).join('');

form.addEventListener('submit', e => {
    e.preventDefault();
    resultado.innerHTML = `<h2>Texto cifrado: ${encrypt(inputForm.value)}</h2>`;
});