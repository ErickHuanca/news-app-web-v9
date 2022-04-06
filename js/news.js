import { saveTask } from './firebase.js'


window.addEventListener('DOMContentLoaded', () => {

})

const newsForm = document.getElementById('news-form');

// DOCUMENTACION PARA AYUDA
// https://firebase.google.com/docs/web/setup?authuser=2&%3Bhl=es&hl=es



var imagesFiles = Array();
document.getElementById("file").addEventListener("change", function (e) {
    imagesFiles = e.target.files;
});


newsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = newsForm['titular']
    const resumen = newsForm['resumen']
    const descripcion = newsForm['descripcion']
    const palabrasclave = newsForm['palabrasclave']
    const fuente = newsForm['fuente']

    saveTask(titulo, resumen, descripcion, palabrasclave, fuente, imagesFiles);


    newsForm.reset();
})