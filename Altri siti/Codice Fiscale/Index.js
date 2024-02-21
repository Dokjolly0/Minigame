// const calcolo_codice_fiscale = document.getElementById("Bottone-calcolo");
// var codice_fiscale = document.getElementById("Codice-fiscale");
// //codice_fiscale.innerHTML = "CIAO";

// //Funzione
// calcolo_codice_fiscale.onclick = function()
// {
//     //Nome
//     var nome = document.getElementById("Nome").value;
//     nome = nome.toUpperCase();
//     //Cognome
//     var cognome = document.getElementById("Cognome").value;
//     cognome = cognome.toUpperCase();
//     //Vocali e consoanti
//     var vocale = "";
//     var consonante = "";
//     //For cognome
//     for(let i = 0; i < cognome.length; i++) 
//     {
//         if(cognome[i] == "A" || cognome[i] == "E" || cognome[i] == "I" || cognome[i] == "O" || cognome[i] == "U") 
//         {
//             vocale += cognome[i];
//         }
//         else{
//             consonante += cognome[i];
//         }
//     }
//     let consonanti_cognome = "";
//     if(consonante.length == 0){
//         consonanti_cognome += vocale[0];
//         consonanti_cognome += vocale[1];
//         consonanti_cognome += vocale[2];
//     }else if(consonante.length == 1){
//         consonanti_cognome += consonante[0];
//         consonanti_cognome += vocale[0];
//         consonanti_cognome += vocale[1];
//     }else if(consonante.length == 2){
//         consonanti_cognome += consonante[0];
//         consonanti_cognome += consonante[1];
//         consonanti_cognome += vocale[0];
//     }else if(consonante.length >= 3){
//         consonanti_cognome += consonante[0];
//         consonanti_cognome += consonante[1];
//         consonanti_cognome += consonante[2];
//     }
//     consonante = "";
//     vocale = "";


//     //for Nome
//     for(let i = 0; i < nome.length; i++) 
//     {
//         if(nome[i] == "A" || nome[i] == "E" || nome[i] == "I" || nome[i] == "O" || nome[i] == "U") 
//         {
//             vocale += nome[i];
//         }
//         else{
//             consonante += nome[i];
//     }
//     }
//     let consonanti_nome = "";
//     //alert("Hai inserito un nome invalido");
//     //C0
//     debugger;
//     if(consonante.length === 0){
//             consonanti_nome += vocale[0];
//             consonanti_nome += vocale[1];
//             consonanti_nome += vocale[2];
//     }
//     //C1
//     else if(consonante.length === 1){
//         consonanti_nome += consonante[0];
//         consonanti_nome += vocale[0];
//         consonanti_nome += vocale[1];
//         }
//     //C2
//         else if(consonante.length === 2){
//         consonanti_nome += consonante[0];
//         consonanti_nome += consonante[1];
//         consonanti_nome += vocale[0];
//     //C3
//     }else if(consonante.length){
//         consonanti_nome += consonante[0];
//         consonanti_nome += consonante[1];
//         consonanti_nome += consonante[2];
//     }

//     if(consonanti_nome[2] === "undefined"){
//         consonanti_nome[2] = "X";
//     }
    
//     codice_fiscale.innerHTML = consonanti_cognome += consonanti_nome;


//     let anno = document.getElementById("Data").value;
//     //AAAA-MM-DD
//     //codice_fiscale.innerHTML += anno;
//     //Anno
//     Anno = anno[2] + anno[3];
//     codice_fiscale.innerHTML += Anno;

//     //Mese
//     if(anno[5] < 10){
//         anno[5] = anno[5];
//     }else if(anno[5] >= 10 && anno[6] <= 12){
//         anno[5] = 10;
//     }
//     let Mese = anno[5] + anno[6];
//     switch(Mese){
//         case "01": codice_fiscale.innerHTML += "A";
//         break;
//         case "02": codice_fiscale.innerHTML += "B";
//         break;
//         case "03": codice_fiscale.innerHTML += "C";
//         break;
//         case "04": codice_fiscale.innerHTML += "D";
//         break;
//         case "05": codice_fiscale.innerHTML += "E";
//         break;
//         case "06": codice_fiscale.innerHTML += "H";
//         break;
//         case "07": codice_fiscale.innerHTML += "L";
//         break;
//         case "08": codice_fiscale.innerHTML += "M";
//         break;
//         case "09": codice_fiscale.innerHTML += "P";
//         break;
//         case "10": codice_fiscale.innerHTML += "R";
//         break;
//         case "11": codice_fiscale.innerHTML += "S";
//         break;
//         case "12": codice_fiscale.innerHTML += "T";
//         break;
//     }
//         //Giorno
//         let giorno = anno[8] + anno[9];
//         //Sesso
//         let sesso = document.getElementById("Sesso").value;
//         if(sesso == "Maschio"){
//             codice_fiscale.innerHTML += parseInt(giorno);
//         }else{
//             codice_fiscale.innerHTML += parseInt(giorno) + 40;
//         }

// }
// anno[0], anno[1], anno[2], anno[3], anno[4], anno[5], 
// anno[6], anno[7], anno[8], anno[9], anno[10], anno[11]

const calcolo_codice_fiscale = document.getElementById("Bottone-calcolo");
var codice_fiscale = document.getElementById("Codice-fiscale");
//Funzione
calcolo_codice_fiscale.onclick = function()
{
    codice_fiscale.value = "";
    //Nome
    var nome = document.getElementById("Nome").value;
    nome = nome.toUpperCase();
    //Cognome
    var cognome = document.getElementById("Cognome").value;
    cognome = cognome.toUpperCase();
    //Vocali e consoanti
    var vocale = "";
    var consonante = "";

        for(let i = 0; i < cognome.length; i++) 
        {
            if(cognome[i] == "A" || cognome[i] == "E" || cognome[i] == "I" || cognome[i] == "O" || cognome[i] == "U") 
            {
                vocale += cognome[i];
            }
            else{
                consonante += cognome[i];
            }
        }
    {//If cognome
        debugger;
        let consonanti_cognome = "";
        if(consonante.length == 0 && vocale === 3){
            consonanti_cognome += vocale[0];
            consonanti_cognome += vocale[1];
            consonanti_cognome += vocale[2];
            codice_fiscale.innerHTML += consonanti_cognome;
        }else if(consonante.length == 1 && vocale >= 2){
            consonanti_cognome += consonante[0];
            consonanti_cognome += vocale[0];
            consonanti_cognome += vocale[1];
            codice_fiscale.innerHTML += consonanti_cognome;
        }else if(consonante.length == 2){
            consonanti_cognome += consonante[0];
            consonanti_cognome += consonante[1];
            consonanti_cognome += vocale[0];
            codice_fiscale.innerHTML += consonanti_cognome;
        }else if(consonante.length >= 3){
            consonanti_cognome += consonante[0];
            consonanti_cognome += consonante[1];
            consonanti_cognome += consonante[2];
            codice_fiscale.innerHTML += consonanti_cognome;
        }else if(cognome.length === 2 && consonante.length === 1 && vocale.length === 1){
            consonanti_cognome += consonante[0];
            consonanti_cognome += vocale[0];
            consonanti_cognome += "X"
            codice_fiscale.innerHTML += consonanti_cognome;
        }else{
            alert("Inserisci un cognome valido")
            codice_fiscale.innerHTML = "";
        }
        if(cognome.length === 0){
            codice_fiscale.innerHTML = "";
        }
        codice_fiscale.innerHTML += consonanti_cognome;
        vocale = "";
        consonante = "";
    }

    
    for(let i = 0; i < nome.length; i++) 
    {
        if(nome[i] == "A" || nome[i] == "E" || nome[i] == "I" || nome[i] == "O" || nome[i] == "U") 
        {
            vocale += nome[i];
        }
        else{
            consonante += nome[i];
        }
    }
    {//If Nome
    debugger;
    let consonanti_nome = "";
    if(consonante.length == 0 && vocale >= 3){
        consonanti_nome += vocale[0];
        consonanti_nome += vocale[1];
        consonanti_nome += vocale[2];
        codice_fiscale.innerHTML += consonanti_nome;
    }else if(consonante.length == 1 && vocale >= 2){
        consonanti_nome += consonante[0];
        consonanti_nome += vocale[0];
        consonanti_nome += vocale[1];
        codice_fiscale.innerHTML += consonanti_nome;
    }else if(consonante.length == 2){
        consonanti_nome += consonante[0];
        consonanti_nome += consonante[1];
        consonanti_nome += vocale[0];
        codice_fiscale.innerHTML += consonanti_nome;
    }else if(consonante.length >= 3){
        consonanti_nome += consonante[0];
        consonanti_nome += consonante[1];
        consonanti_nome += consonante[2];
        codice_fiscale.innerHTML += consonanti_nome;
    }else if(nome.length === 2 && consonante.length === 1 && vocale.length === 1){
        consonanti_nome += consonante[0];
        consonanti_nome += vocale[0];
        consonanti_nome += "X"
        codice_fiscale.innerHTML += consonanti_nome;
    }else{
        alert("Inserisci un nome valido");
        codice_fiscale = "";
    }
    if(nome.length === 0){
        codice_fiscale.innerHTML = "";
    }
    }
}