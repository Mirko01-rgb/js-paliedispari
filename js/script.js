// Una funzione per capire se la parola è
// palindroma
















// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

//Function

function random(numMax, numMin){
 var rnd = Math.floor(Math.random()* numMax)  + numMin;
 return rnd;
}

var numRandomici = random(5, 1);
console.log('Numero randomico', numRandomici);

var sum = 0;
var utenteNumb = parseInt(prompt('Scegli un numero da 1 a 5:'));
if(utenteNumb < 0 || utenteNumb > 5){
  alert('Hai inserito un numero non compreso tra 1 e 5');
}
var pariDispari = prompt('Cosa scegli Pari o Dispari:')
// console.log(utenteNumb);
// console.log(pariDispari);

 sum = utenteNumb + numRandomici;
 console.log('Valore della somma', sum);
 if (sum % 2 == 0 && pariDispari =='Pari'){
   console.log('Ha vinto Mirko');
 }else if (sum % 2 == 1 && pariDispari == 'Dispari'){
  console.log('Ha vinto Mirko');
}else{
  console.log('Ha vinto il computer');
}
