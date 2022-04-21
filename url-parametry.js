// ziskani get parametru
//pozadam si o to co je za otaznikem v url adrese
const queryString = window.location.search;

//odparsuje si jednotlive casti
const urlParams = new URLSearchParams(queryString);

//element s vysledky
const resultElement = document.querySelector('#seznam-parametru');

//prochazeni parametru a jejich vypis
//podle toho kolilk mam entries tolik opakovani udela / obdoba for each

for (const entry of urlParams.entries()) {
    let listItemElement = document.createElement('li');    //podle toho co mi prichazi, tim naplnim li
    //parametr, ktery je podklicem entry na prvni pozici bude / naplneni li
    listItemElement.innerHTML = `${entry[0]}: ${entry[1]}`;
    resultElement.appendChild(listItemElement);
}