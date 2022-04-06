
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzWR9gvSIhrZ0qN9OI97sPI8Ob_tG14Po",
    authDomain: "news-data-9e1e5.firebaseapp.com",
    projectId: "news-data-9e1e5",
    storageBucket: "news-data-9e1e5.appspot.com",
    messagingSenderId: "93879883971",
    appId: "1:93879883971:web:f346336356ec527666ea76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = async (titulo, descripcion, resumen, palabraclave, fuentes, imagesUrl) => {
    
    
    var imagesUrlList = await getImagesUrl(imagesUrl)
    console.log(imagesUrlList)


    addDoc(collection(db, "news"), {
        titular: titulo.value,
        descripcion: descripcion.value,
        resumen: resumen.value,
        palabraclave: palabraclave.value,
        fuentes: fuentes.value,
        imagesUrl: imagesUrlList
    });
}


function getImagesUrl(imagesUrl){
    return new Promise(function(resolve,reject){
      // let filez=review_photo.files;
      let urlarray=[];
      // let user=firebase.auth().currentUser;
      // let files=Array.from(filez);
  
      console.log(typeof(files))
      Object.values(files).forEach(function(file) {
          console.log("Starting to put file...");
          var storageRef=firebase.storage().ref('images/${file.name}');
  //       var storage = firebase.storage().ref("images/" + files[i].name);
  
              storageRef.put(file).then(function(snapshot){
                  console.log("Upload done, getting download URL...");
                  snapshot.ref.getDownloadURL().then(function(url) {
                      console.log("Download URL gotten, adding to array...");
                      // console.log(urlarray);
                      urlarray.push(url);
                  })
              })
          });
      if (!urlarray){
          reject("oops");
      }
      else {
          console.log("Resolving with "+urlarray.length+" download URLs");
          resolve(urlarray);
      }
    });
}