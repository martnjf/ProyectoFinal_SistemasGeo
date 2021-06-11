auth.onAuthStateChanged( user =>{
 
    if(user){
        db.collection('ofertas').onSnapshot(snapshot => {
            obtieneOfertas(snapshot.docs);
        });
        configurarMenu(user);
    }
    else{
        configurarMenu();
    }
});
const frmIngresar = document.getElementById('frmIngresar');

frmIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let correo = frmIngresar['correo'].value;
    let contrasena = frmIngresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo,contrasena).then(cred => {
        console.log(cred);

        $('#ingresarmodal').modal('hide');
        frmIngresar.reset(); 
        frmIngresar.querySelector('.error').innerHTML='';

    }).catch( err => {   
        frmIngresar.querySelector('.error').innerHTML=msjError(err.code); 
        console.log(err);
    });


});

function msjError(codigo){
    let mensaje = '';
    switch(codigo){
        case 'auth/wrong-password':
            mensaje = 'Contraseña incorrecta';
            break;
        case 'auth/user-not-found':
            mensaje = 'Usuario incorrecto';
            break;
        case 'auth/weak':
            mensaje = 'Contraseña débil';
            break;
        default:
            mensaje = 'Ocurrió un error desconocido';
    }
    return mensaje;
}

const salir = document.getElementById('salir');

salir.addEventListener('click', (e)=>{
    e.preventDefault();

    auth.signOut().then(()=>{
        alert('Sesión cerrada');  
    });
});

const frmRegistrar = document.getElementById('frmRegistrar');

frmRegistrar.addEventListener('submit', (e)=>{
    e.preventDefault();

    const correo = frmRegistrar['r_correo'].value; /*** */
    const contrasena = frmRegistrar['r_contrasena'].value;

    auth.createUserWithEmailAndPassword(correo,contrasena).then(cred=>{
        
        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: frmRegistrar['r_nombre'].value,
            direccion: frmRegistrar['r_direccion'].value
        });

    }).then(()=>{
        $('#registrarmodal').modal('hide');
        frmRegistrar.reset();
        frmRegistrar.querySelector('.error').innerHTML = '';
    }).catch(err=>{
        frmRegistrar.querySelector('.error').innerHTML = msjError(err.code);
    });

});