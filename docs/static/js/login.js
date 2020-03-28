let state = "login"
let provider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user, user.providerData)
    } else {
        // No user is signed in.
    }
})

//sign in with google
function googleSignin() {
    let err = false
    firebase.auth().signInWithPopup(provider).then(function(result) {
        let token = result.credential.accessToken
        let user = result.user
        console.log(token, user)
    }).catch(function(error) {
       let errorCode = error.code
       let errorMessage = error.message
       window.alert("ERROR! Code: " + errorCode + "\nInfo: " + errorMessage)
       err = true
    }).then(_ => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user && !err) {
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                    if (!snapshot.exists()) {
                        let user = firebase.auth().currentUser;
                        createNewUser(user.uid, user.email)
                        console.log(user.uid, user.email, user)
                    }
                    window.location.href = "index.html"
                })
            } else {
                // No user is signed in.
            }
        })
    })
}
 

//show register forms
function showRegister() {
    state = "register"
    document.getElementById("to_login").style.display = "block"
    document.getElementById("to_register").style.display = "none"

    document.getElementById("login").style.display = "none"
    document.getElementById("register").style.display = "block"
}

//show login forms
function showLogin() {
    state = "login"
    document.getElementById("to_register").style.display = "block"
    document.getElementById("to_login").style.display = "none"

    document.getElementById("register").style.display = "none"
    document.getElementById("login").style.display = "block"
}

//register new users
function register(email, password, password2) {
    let err = false

    if (password === password2) { //if passwords match
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) { //create new user
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            window.alert("ERROR! Code: " + errorCode + "\nInfo: " + errorMessage)
            showRegister()
            err = true
        })
    } else {
        window.alert("ERROR! Passwords do not match.")
        err = true
    }

    if (!err) { //if no errors
        firebase.auth().onAuthStateChanged((user) => {
            if (user) { //if success, send verification email
                //let user = firebase.auth().currentUser;
                console.log(user, user.providerData)

                user.sendEmailVerification().then(function() { //send verification email
                    window.alert("Success! An email has been sent to " + email + " Please confirm your email to access all features.")
                    showLogin()
                    window.location.href = "index.html"
                  }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code
                    var errorMessage = error.message
                    window.alert("ERROR! Code: " + errorCode + "\nInfo: " + errorMessage)
                })

                createNewUser(user.uid, user.email)

            }
        })
    }
}

function createNewUser(userId, email) {
    firebase.database().ref('users/' + userId).set({
      uid: userId,
      email: email
    })
}

//logout user
function logout() {
    firebase.auth().signOut();
    console.log("succesfully out")
}

function login(email, password) {
    let err = false
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        window.alert("ERROR! Code: " + errorCode + "\nInfo: " + errorMessage)
        err = true
    }).then(_ => {
        if (!err) {
            window.location.href = "index.html"
        }
    })
}

Array.from(document.getElementsByClassName("switchButton")).forEach(self => {
    self.addEventListener("click", _ => {
        if (state === "login") {
            showRegister()
        } else {
            showLogin()
        }
    })
})

document.getElementById("register_button").addEventListener("click", _ => {
    let info = [
        document.getElementById("register_email").value,
        document.getElementById("register_password").value,
        document.getElementById("register_password_confirm").value
    ]
    register(...info)
})

document.getElementById("login_button").addEventListener("click", _ => {
    let info = [
        document.getElementById("login_email").value,
        document.getElementById("login_password").value,
    ]
    login(...info)
})

document.getElementById("login_google").addEventListener("click", _ => {
    googleSignin()
})