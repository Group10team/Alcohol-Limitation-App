(function(){
   //Initialize Firebase
   const config = {
    apiKey: "AIzaSyD_e72058xwOdSXTlCq78qZYYW43xRLymM",
    authDomain: "alcohol-limiter-app.firebaseapp.com",
    databaseURL: "https://alcohol-limiter-app.firebaseio.com",
    storageBucket: "alcohol-limiter-app.appspot.com",
  };
  firebase.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword =document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogOut');
  
  //Add login
  btnLogin.addEventListener('click', e=>{
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=>console.log(e.message));
    });

  //Add signup
  btnSignUp.addEventListener('click',e=>{
    //get email and pass and confirm real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
  });

  btnLogout.addEventListener('click',e=>{
    firebase.auth().signOut();
  });

  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');  
    }
});

}());