const palavra = "O que a vida quer da gente é coragem.";
const vogais = "aeiouAEIOUéÉãÃ";
const ultimaPosicaoPalavra = palavra.length -1;

let i = 0;
let contarVogais = "";

/*  1 quais são as vogais? ok
    2 qual é a frase que devo contar? ok
    3 quantas letras tem a frase? ok
    4 quantas letras são vogais? ok

    Se frase contém aeiou então eu somo +1 ao contador por 
    cada vogal encontrada, se for outra letra eu ignoro na 
    contagem
*/

function evogal(caracteres) {
    for (let j = 0; j <vogais.length; j++) 
        {
            if (caracteres === vogais[j]) 
            {
                return true;
            }
        }
        return false;
}

for (let i = 0; i <= ultimaPosicaoPalavra; i++) {
if (evogal(palavra[i])) {
    contarVogais++;
}
}
console.log ("A frase contém " +contarVogais+ " vogais.")