// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdTW5hRmRH6KreqoA54a29ZAo5-xU-raI",
    authDomain: "gadi-autorizacion.firebaseapp.com",
    projectId: "gadi-autorizacion",
    storageBucket: "gadi-autorizacion.appspot.com",
    messagingSenderId: "1010664700879",
    appId: "1:1010664700879:web:ade08c81363ebe492d70ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();



const lstLoggedOut = document.querySelectorAll('.logged-out');
const lstLoggedIn = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
    if(user){

        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
                <p>Nombre: ${doc.data().nombre}</p>
                <p>Correo: ${user.email }</p>
                <p>Dirección: ${doc.data().direccion}</p>
            `;

            datosdelacuenta.innerHTML = html;
        });
        lstLoggedIn.forEach(item => item.style.display = 'block');
        lstLoggedOut.forEach(item => item.style.display = 'none');
    } else {
        lstLoggedIn.forEach(item => item.style.display = 'none');
        lstLoggedOut.forEach(item => item.style.display = 'block');
    }
};


const lstOfertas = document.getElementById('lstOfertas');

const obtieneOfertas = (data) => {
    if(data.length){

        let html = '';       
        
        data.forEach( doc => {
            const oferta = doc.data();
            const columna = `
                <div class="card card-1 col-12 col-md-4 m-2" style="width: 18rem;">
                    <img src="../img/${oferta.imagen}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${oferta.producto}</h5>
                        <p class="card-text">${oferta.marca}</p>
                        <p>$${oferta.precio}</p>
                    </div>
                </div>
            `;
            html += columna;
        });

        lstOfertas.innerHTML = html;
    }

};