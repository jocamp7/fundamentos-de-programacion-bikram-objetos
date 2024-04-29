const Coche ={
    marca: 'mercedes',
    modelo: 'Idk',
    matricula: 98623990,
}

const Casa ={
    codPostal:48920,
    calle: 'carlos vii',
    portal:7, 
    piso:5
}

const  FullStackDeveloper ={
    lenguajes: ['javascript','java','c#'],
    proyectos: ['un proyecto','otro proyecto']
}



const Perro ={
    nombre:'Paco',
    raza:'chihuahua',
    color:'marrón',
    edad:10,

    ladrar: function ladrar (){
        return console.log("guau");
    },

    popo: function popo (){
        return  Math.random() * 3;
    }

}



let marcaPortatil=Portatil.marca;

let marcaPortatil2= Portatil["marca"];

let grupos= Concierto.grupos;

let Rojo=Led.rojo;
let Verde= Led.verde;
let Azul= Led.azul;

let RGB=[Rojo,Verde,Azul];

/*
10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera

11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)

12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo ,
por el valor objeto con propiedades: nombreArchivo, copias, numPaginas
*/

Portatil.modelo='P345';

Concierto.cartelera.push("Guns N' Roses"); 

Concierto.fecha=new Date("2024-04-29"); 


let objeto ={
   nombreArchivo:'archivo1',
   copias: '2',
   numPaginas:'125'
}

Impresora.imprimiendo=objeto;


let Noticia={
    titular:'algo de titulo',
    cuerpo:'blahblah'
}

let Persona={
    nombre:'Juan', 
    apellidos:['Muñoz','Vazquez'],
    edad:35
}

let Avion={
    numPasajeros:86,

    despegar: function despegar (){
        return console.log("despegando");
    },

    volar: function volar (){
        return console.log("llegando al destino") ;
    },

    aterrizar: function aterrizar(){
        return console.log("aterrizando")
    }

}

let Paquete ={
    contenido:['objeto1','objeto2','objeto3','objeto4']
}



 let Pais={
    numHabitantes:1998,
    continente:'Asia',
    gentilicio:'taiwanes'
 }


 let codError= O_Error.codigo;

 let integrantes= [];
 integrantes= Grupo.integrantes;

let nivelesTinta=[];
nivelesTinta= Impresora.tinta

let pixeles= Pantalla.pixeles;

let especificaciones=Movil["especificaciones"];

/*23.- Dado un objeto de nombre Grupo modifica el valor de la propiedad numIntegrantes por el valor 5

 24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080

 25.- Dado un objeto de nombre Led modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false

 26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º */

 Grupo.numIntegrantes=5;

 Pantalla.dimensiones='1920x1080';

 Led.encendido= !Led.encendido; 

 Movil.temperatura='20º';
