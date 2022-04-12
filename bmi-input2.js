//funkce pro vypocet bmi

function vypocitejBMI (){
    let vyskaMetry = parseFloat(document.querySelector('input[name="vyska"]').value);
    let vahaKilogramy = parseFloat(document.querySelector('input[name="vaha"]').value);
    let BMI = Math.round(vahaKilogramy/ Math.pow(vyskaMetry, 2));

}

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypocitejBMI);
});