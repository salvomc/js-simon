PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1- Creo un'array vuoto che conterrà i numeri casuali generati;
2- Creo una funzione genera numeri casuali;
3- Creo una funzione che inserisce i valori nell'array;
4- Dichiaro le variabili per i secondi e gli array per le risposte corrette, incorrette e per il totale delle risposte corrette;
5- Utilizzo due volte la funzione setTimeout per far scomparire i numeri utilizzando la variabile dei secondi, e far uscire i prompt;
6- Faccio inserire in input i numeri;
7- Creo un ciclo for in cui controllo quali sono i numeri corretti e sbagliati, la somma dei numeri corretti e li pusho in un array;
8- Mostro a schermo i numeri corretti, sbagliati e la somma dei numeri corretti;