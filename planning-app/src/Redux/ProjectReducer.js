const CREATE_PROJECT = 'CREATE_PROJECT'
const IS_LOADED = 'IS_LOADED'
const SET_ERRORS = 'SET_ERRORS'

let initialState = {
    projects: [],
    isLoaded: false,
    errors: {}

}


const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.project]
            }
        case IS_LOADED: {
            return {
                ...state,
                isLoaded: action.load
            }
        }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.err
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
export const createProjectAC = (project) => {
    return {
        type: CREATE_PROJECT, project
    }
}

export const createProjectThunkCreator = (firstName, lastName, uid, project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch(toggleLoadingAC(true));
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: firstName,
            authorLastName: lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch(createProjectAC(project));
            dispatch(toggleLoadingAC(false))
        }).catch((err) => {
            dispatch(setErrorsAC(err))
            dispatch(toggleLoadingAC(false))
        })
    }
}


export const updateProjectThunkCreator = (firstName, lastName, uid, project, projectId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch(toggleLoadingAC(true));
        const firestore = getFirestore();
        firestore.collection('projects').doc(`/${projectId}`).set({
            ...project,
            authorFirstName: firstName,
            authorLastName: lastName,
            authorId: uid,
            createdAt: new Date()
        }).then((response) => {
            dispatch(toggleLoadingAC(false));
        }).catch((err) => {
            dispatch(setErrorsAC(err))
            dispatch(toggleLoadingAC(true));
        })
    }
}

export default projectReducer