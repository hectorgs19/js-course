
var lista = {
    "nombre": "Hector Gomez Soria",
    "edad": "26",
    "desarrollador": true,
    "nacimiento": "1996-05-18",
    "libro" : {
        "titulo" : "Ikigai",
        "autor" : "Frances Miralles",
        "fecha" : "2016",
        "url" : "https://www.amazon.es/Ikigai-secretos-Japón-Medicinas-complementarias/dp/8479539224/ref=sr_1_1?__mk_es_ES=ÅMÅŽÕÑ&crid=3TH6ZQU3WELHA&keywords=libro+ikigai&qid=1664297031&qu=eyJxc2MiOiIxLjk5IiwicXNhIjoiMS42MSIsInFzcCI6IjEuMTAifQ%3D%3D&sprefix=libro+kiagai%2Caps%2C101&sr=8-1"
    }
}

console.log("Hola me llamo "+ lista.nombre+", tengo "+lista.edad +" años."+
"\n¿Me considero desarrollador? :"+lista.desarrollador+ "\nMi libro favorito es "+lista.libro.titulo+" del autor "+lista.libro.autor+ " publicado en " + lista.libro.fecha  );
