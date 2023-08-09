alert("Bienvenid@ a Darkinin Mobile, a continuacion le pediremos los siguientes datos para su registro: \n -Usuario. \n -Contraseña.")

let usuario = prompt("Ingrese un usuario.");
let contraseña = prompt("Ingrese su contraseña.");
let salida;

/* Validacion de datos ingresados */
    for(let i= 0; i <200; i++){

        if(salida == 1){
            alert("Lastimosamente no se completó su registro. Vuelva pronto.");
            break;
        
        }else if(usuario == "" || contraseña == "" || usuario == null || contraseña == null){
            
            alert("No se ha ingresado datos en algunos de los campos, por favor intente nuevamente");
            usuario= prompt("Ingrese un usuario");
            contraseña=prompt("Ingrese una contraseña");
            salida=prompt("Ingresa 1 para salir. Sino, puedes continuar.")
            
        }else{
            alert("Bienvenido "+ usuario);
            break;
        }
    }


let continuamos;
let historias;

/* Continuacion solo si el usuario es registrado */
    if(salida != 1){
        alert("Es un placer tenerte por aca.");
        continuamos=prompt("Puedes empezar a ver nuestro contenido si deseas. Para ello debes elegir una opcion: \n 1--Continuar. \n 2--Salir.");
        }
  

/* Contenido a mostrar al usuario registrado */
for(let i= 0; i <200; i++){

     if(historias == 1){
        alert("Usted a elegido Zeus");

        alert("ZEUS: \n --Control del rayo.\n --Manipulacion de energia.\n --Dominio de la magia.\n --Teletransportacion.\n --Control del clima.\n --Omnipotencia.\n --Agilidad,durabilidad,longevidad,velocidad y fuerza sobrehumana.");

        historias=prompt(" Para ver las habilidades de Hades ingrese 2. \n Para ver las habilidades de Dionisio ingrese 3. \n --Para salir ingrese 0.");

    }else if(historias == 2){
        alert("Usted a elgido Hades");

        alert("HADES: \n --Invisibilidad. \n --Dominio de los muertos y espiritus. \n --Convocar y controlar fantasmas. \n --Conceder vida eterna a los mortales, en estado no-muerto, como una sombra. \n --Causar terremotos.");

        historias=prompt("Para ver las habilidades de Zeus ingrese 1. \n Para ver las habilidades de Dionisio ingrese 3. \n --Para salir ingrese 0.");


    }else if(historias == 3){
        alert("Usted a elegido Dionisio");

        alert("DIONISIO: \n --Convertir personas en animales. \n --Puede conjurar cualquier tipo de bebida. \n --Es inmune a los efectos del alcohol. \n --Puede teletransportarse a cualquier lugar donde haya fiesta. \n --Lleva alegria y crea un buen ambiente en donde sea.");

        historias=prompt("Para ver las habilidades de Zeus ingrese 1. \n Para ver las habilidades de Hades ingrese 2. \n --Para salir ingrese 0.");

    }else if(historias== 0){
        alert("Hasta luego, vuelva pronto.");
        break;

    }else if(continuamos == 1) {
        alert("Que bueno que decides quedarte, no te arrepentiras. Tenemos varias habilidades sobre Dioses que te pueden interesar.");

        historias=prompt("Elige una de las siguientes opciones:\n 1--Zeus. \n 2--Hades. \n 3--Dionisio. \n --Para salir ingrese 0.");
        
    }
}

/* Valoraciones */
let valoracionesDeUsuario;
function valoraciones(calificacion){
    alert("Gracias por sus valoraciones "+ usuario);
}

for(let i=0; i <3; i++){
    valoracionesDeUsuario= prompt("Calificanos del 1 al 10.\nSiendo 1, la valoracion mas baja y 10 la valoracion mas alta");
    valoraciones(usuario);
    break;
}
        
    
        
    
    
