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