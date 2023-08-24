const Skins = [
    {nombre: "Zeus Emperador", precio: 35, },
    {nombre: "Hades Renegado", precio: 85, },
    {nombre: "Dionisio Defensor", precio: 87, },
    {nombre: "Artemisa Arquera", precio: 65, },
];

let carritoSkins = [];
let precio=0;

let comprandoSkins = prompt("Bienvenido, tenemos varios atuendos que puedes comprar, Para continuar ingrese 1, para salir ingrese 0");
for (let i=0; i <200; i++){

    if(comprandoSkins == 0){
        alert("Hasta luego, vuelva pronto");
        break;
    } else if(comprandoSkins == 1){
    
        comprandoSkins = prompt("Ingrese la letra correspondiente a la skin que desea comprar:\n a--Zeus Emperador.\n b--Hades Renegado.\n c--Dionisio Defensor.\n d--Artemisa Arquera.");
        
    }else if(comprandoSkins != "a" || comprandoSkins != "b" || comprandoSkins != "c" || comprandoSkins != "d"){
    
        alert("No se ha ingresado una opcion correspondiente a la skin.");
        comprandoSkins=prompt("Ingrese nuevamente la letra correspondiente a la skin que desea comprar:\n a--Zeus Emperador.\n b--Hades Renegado.\n c--Dionisio Defensor.\n d--Artemisa Arquera.");
    
        switch(comprandoSkins){
            case "a":
                precio= 35;
                break;
    
            case "b":
                precio= 85;
                break;
    
            case "c":
                precio= 87;
                break;
    
            case "d":
                precio= 65;
                break;

            
        }
    }
}
