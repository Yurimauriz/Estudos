// aula sobre bloco de codigo 

/*
 * inicio de um bloco de codigo --> {
 *
 *   } <-- fim de um bloco de codigo
 * 
*/

{
   console.log("Passo #01");
   console.log("Passo #02");
   console.log("Passo #03");
}

{
    console.log("Passo #04");
    console.log("Passo #05");
}

{ // Você pode criar um bloco de codigo vazio , mas não é recomendado.
    ;
    ;
    ;
}

{ // Você pode criar varios blocos de codigo dentro de um outro bloco de codigo
    {
        {
            {
                ;
                ;
                ;
            }
        }   
    }
}

console.log("Fim!!")