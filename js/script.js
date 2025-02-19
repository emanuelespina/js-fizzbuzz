
/*

1. creare un ciclo che mi fornisca i num. da 1 a 100 incrementandoli a +1 

2. creare due variabili che per i num. divisibili per 3 e 5

3. tramite la codizione del resto capire quale tra i num. in succezzione sono divisibili sia per 3 che per 5 (questa è la condizione + specifica che va messa all'inizio)

4. tramite la codizione del resto capire quale tra i num. in succezzione sono divisibili sia per 3

5. tramite la codizione del resto capire quale tra i num. in succezzione sono divisibili sia per 5

6. in base al risultato che abbiamo trovato stampare in console

*/

for (let i = 1; i <= 100; i++) {

    const firstDiv = 3;
    const secondDiv = 5;

    const firstWord = "Fizz";
    const secondWord = "Buzz";

    let message;

    if (i % firstDiv === 0 && i % secondDiv === 0) {
        message = firstWord + secondWord;
    } else if (i % firstDiv === 0) {
        message = firstWord;
    } else if (i % secondDiv === 0) {
        message = secondWord
    } else {
        message = i;
    }

    console.log(message);

}