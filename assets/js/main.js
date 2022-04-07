/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// visualizzare in pagina 5 numeri causali e div in html

const numbersElement = document.querySelector(".numbers")

//creare un variabile dove salvare i numeri unici e causali in un array

const randomNumber = []

while (randomNumber.length !== 5) {

    const number = Math.floor(Math.random() * 100)

    if (!randomNumber.includes(number)){
        randomNumber.push(number)
    }
}

console.log(randomNumber)

// a schermo in html il messaggio con la stringa di numeri da memorizzare 

numbersElement.innerHTML = `Memorizza i seguenti numeri: ${randomNumber.toString()}`


//faccio partire un timer di 30 secondi

setTimeout(() => {

    //rimuovere dalla dom i numeri generati a 30 secondi 
    numbersElement.innerHTML = ""

    // dopo 30 secondi compare un promt in cui inserire i numeri uno ad uno 
    // ciclo in cui chiedo di inserire il numero 

       //verifica se il numero inserito include in random
    const userAttempts = []
    for (let i = 0; i < 5; i++){

        

        const userNumber = Number(prompt("inserisci i numeri memorizzati uno alla volta"));
        console.log(userNumber)
        if(randomNumber.includes(userNumber) && !userAttempts.includes(userNumber)){
            userAttempts.push(userNumber)

        }

    }
    console.log(userAttempts)

    //Dopo che sono stati inseriti i 5 numeri, 
    //il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    alert(`hai indovinato ${userAttempts.length}/${randomNumber.length} i numeri che hai indovinato sono ${userAttempts} `)

    



}, 30000);
