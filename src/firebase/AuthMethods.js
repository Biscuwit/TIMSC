export function signUp(auth, email, password) {
  auth.createUserWithEmailAndPassword(email,password)
}
export function signIn(auth, email, password) {
  auth.signInWithEmailAndPassword(email,password)
}
export function logOut(auth) {
  auth.signOut()
}

