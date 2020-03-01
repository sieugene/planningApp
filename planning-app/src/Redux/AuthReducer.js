// import firebase from 'firebase'
import firebase from 'firebase'

const IS_LOADED = 'IS_LOADED'
const SET_ERRORS = 'SET_ERRORS'


let initialState = {
    isLoaded: false,
    errors: {}
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADED: {
            return {
                ...state,
                isLoaded: action.load
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                errors: action.err
            }
        }
        default:
            return state
    }
}

const toggleLoadingAC = (load) => {
    return {
        type: IS_LOADED, load
    }
}

const setErrorsAC = (err) => {
    return {
        type: SET_ERRORS, err
    }
}
export const authThunkCreator = (credentials) => {
    return (dispatch, getFirebase) => {
        dispatch(toggleLoadingAC(true));
        return firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((response) => {
            console.log('Auth success')
            dispatch(toggleLoadingAC(false))
        }).catch((err) => {
            console.log('Some errors in auth')
            dispatch(toggleLoadingAC(false))
            dispatch(setErrorsAC(err))
        })
    }
}
export const signOutThunkCreator = () => (dispatch) => {
    firebase.auth().signOut().then(() => {
        console.log('Sign out Success')
    }).catch(() => {
        console.log('Sign out Errors')
    })
}

export const signUpThunkCreator = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then((response) => {
            debugger
            console.log('hey check')
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const signInWithPopupThunkCreator = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        firebase.auth().getRedirectResult().then((result) => {
            if (result.credential) {
                // This gives you a Google Access Token.
                //let token = result.credential.accessToken;
            }
            //let user = result.user;
        });
// Start a sign in process for an unauthenticated user.
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then((result) => {});
    }
}


export default authReducer