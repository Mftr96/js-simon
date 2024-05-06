//creo l'array che salva i numeri casuali 
let lista_numeri_pc=[];
let lista_numeri_utente=[];

for (let i = 1; i <=5; i++) {
    f_casuali();
    
}

//creo la funzione che fa partire console.log dopo 3 sec

setTimeout(f_prompt,3000);

console.log(lista_numeri_utente)
