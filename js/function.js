//definisco la funzione che crea numeri casuali

function f_casuali(){
    //creo un numero casuale tra 1 e 100
    let n_casuale=Math.ceil(Math.random()*100);
    //stampo in console il numero 
    console.log("numero da indovinare:"+n_casuale)
    //lo aggiungo alla lista
    lista_numeri_pc.push(n_casuale);   
}

//funzione test per timer

function f_log(){
    console.log("ciao");
}

//funzione per mostrare prompt all'utente 
function f_prompt(){
    //creo ciclo per iterare 5 volte 
    for (let i = 1; i <=5 ; i++) {
        let numero_utente=prompt("inserisci il numero da indovinare");
        lista_numeri_utente.push(numero_utente)   
    }    
}