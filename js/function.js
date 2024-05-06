//definisco la funzione che crea numeri casuali

function f_casuali(){
    //creo un numero casuale tra 1 e 100
    let n_casuale=Math.ceil(Math.random()*100);
    //lo aggiungo alla lista
    lista_numeri.push(n_casuale);   
}

//funzione test per timer

function f_log(){
    console.log("ciao");
}