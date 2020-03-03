// import firebase from 'firebase'
import firebase from 'firebase'

const IS_LOADED = 'IS_LOADED'
const SET_ERRORS_SIGN_IN = 'SET_ERRORS'
const SET_ERRORS_SIGN_UP = 'SET_ERRORS_SIGN_UP'

let initialState = {
    isLoaded: false,
    errors: {
        errorsSignIn: {},
        errorsSignUp: {}
    },
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADED: {
            return {
                ...state,
                isLoaded: action.load
            }
        }
        case SET_ERRORS_SIGN_IN: {
            return {
                ...state,
                errors: {...state.errors, errorsSignIn: action.err}
            }
        }
        case SET_ERRORS_SIGN_UP: {
            return {
                ...state,
                errors: {...state.errors, errorsSignUp: action.err}
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
const setErrorsSignInAC = (err) => {
    return {
        type: SET_ERRORS_SIGN_IN, err
    }
}
export const setErrorsSignUpAC = (err) => {
    return {
        type: SET_ERRORS_SIGN_UP, err
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
            dispatch(setErrorsSignInAC(err))
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
        dispatch(toggleLoadingAC(true));
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then((response) => {
            dispatch(toggleLoadingAC(false));
        }).catch((err) => {
            dispatch(setErrorsSignUpAC(err))
            dispatch(toggleLoadingAC(false));
        })
    }
}

export const signInWithPopupThunkCreator = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch(toggleLoadingAC(true));
        firebase.auth().getRedirectResult().then((result) => {
            if (result.credential) {
                // This gives you a Google Access Token.
                //let token = result.credential.accessToken;
            }
            //let user = result.user;
            dispatch(toggleLoadingAC(false));
        }).catch((err) => {
            dispatch(setErrorsSignUpAC(err))
            dispatch(toggleLoadingAC(false));
        })
// Start a sign in process for an unauthenticated user.
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        const firestore = getFirestore();
        firebase.auth().signInWithPopup(provider).then((result) => {
            //if is new user then adding to collection
            if(result.additionalUserInfo.isNewUser) {
                const initials = result.additionalUserInfo.profile.name.split(/\s+/).map(x => x.charAt(0)).join('');
                return firestore.collection('users').doc(result.user.uid).set({
                    firstName: result.additionalUserInfo.profile.given_name,
                    lastName: result.additionalUserInfo.profile.family_name,
                    initials: initials
                })
            }
        }).catch((err) => {
            dispatch(setErrorsSignUpAC(err))
        })
    }
}


export default authReducer