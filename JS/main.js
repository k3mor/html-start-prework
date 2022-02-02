
//zad 28-js-deklaracja-zmiennych
let imie = "Roman", nazwisko = "Zbroiński";
console.log("Mam na imię: " + imie + " a na nazwisko: " + nazwisko);
// lub
var mojeImie = "Roman";
var mojeNazwisko = "Zbroiński";
console.log(mojeImie + " " + mojeNazwisko);
//zad 29-js-suma-zmiennych
//Sposób 1:
console.log("Uwielbiam JavaScript");
//Sposób 2:
let iLoveJS = "Kocham JavaSript";
console.log(iLoveJS);
//Swoją drogą, skoro nazwa zadania
//brzmi: suma zmiennych, to już może...
let zm1 = 10, zm2 = 20, suma = zm1 + zm2;
console.log(`Suma zmiennych: zm1=${zm1} i zm2=${zm2} wynosi: ${suma}`);
//Zad 30-js-tworzenie-tablicy
//Nie bardzo rozumiem zadania, czy chodzi o:
//Tworzenie tablicy o dowolnej liczbie elementów, czyli
//var tab1 = new Array(n)//gdzie n stanowi n-elentowową wartość liczby rzeczywistej, np: 128
//czy biega o to, że mogę kilka liczb do niej "wrzucić" i tyle, czyli:
const tab2 = [100, -200, 0.11, 2];
//Zad 31-js-tablica-ze-zmiennymi
// Zdeklaruj trzy zmienne o dowolnych nazwach - do każdej z nich przypisz dowolną liczbę:
let zmTab1 = 1, zmTab2 = 2, zmTab3 = 3;
//Stwórz zamienną o dowolnej nazwie, przypisz do niej tablicę, której elementami będą wcześniej zdeklarowane zmienne.
const tabZmiennych1 = [zmTab1, zmTab2, zmTab3];
console.log("*** Przerywnik ***");
//Zad 32.
//alert("Skrypt działa prawidłwo!");
//Zad. 33-js-warunki
let zmA = 12;
//Sposób 1 if:
if(zmA>10){console.log("Wartość zmA jest WIĘKSZA od 10 i wynosi: " + zmA)}
if(zmA<10){console.log("Wartość zmA jest MNIEJSZA od 10 i wynosi: " + zmA)}
if(zmA==10){console.log("Wartość zmA jest RÓWNA : " + zmA)}
//Sposób 2 if/else
console.log("*** Przerywnik ***");
if(zmA>10)
    {
        console.log("Wartość zmA jest WIĘKSZA od 10 i wynosi: " + zmA);
    }else if(zmA<10)
        {
            console.log("Wartość zmA jest MNIEJSZA od 10 i wynosi: " + zmA);
        }else if(zmA==10)
            {
                console.log("Wartość zmA jest RÓWNA : " + zmA);
            }
console.log("*** Przerywnik ***");
//Zad 34-js-suma-tabZmiennych
let firstNumber = 1, secondNumber = 2;
function sumka(a, b)
    {
        let suma = a + b;
        return suma;
        //prościej:
        //return a + b;
    }
console.log(sumka(firstNumber, secondNumber));
console.log("*** Przerywnik ***");

//Zad 35-js-dodawanie-tekstu
let zmTekstu1 = document.querySelector('p');
zmTekstu1.textContent = 'JavaScript i \"JUSZ\"';

//Zad 35-js-zdarzenie-onclick
let btnAlert1 = document.querySelector('#btn-1');
btnAlert1.onclick=function(){
    alert("Klik działa!");
}
