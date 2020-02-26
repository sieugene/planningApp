import firebase from 'firebase'
let initialState = {

}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export const authThunkCreator = (credentials) => {
    return (dispatch,getFirebase) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            console.log('Auth success')
        }).catch(() => {
            console.log('Some errors in auth')
        })
    }
}
export const signOutThunkCreator = () => (dispatch) => {
    firebase.auth().signOut().then( () => {
        console.log('Sign out Success')
    }).catch(() => {
        console.log('Sign out Errors')
    })
}


export default authReducer