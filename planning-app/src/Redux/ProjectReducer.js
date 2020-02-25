const CREATE_PROJECT = 'CREATE_PROJECT'

let initialState = {
    projects: [
    ]
}


const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.project]
            }
        default:
            return state
    }
}


export const createProjectAC = (project) => {
    return {
        type: CREATE_PROJECT, project
    }
}

export const createProjectThunkCreator = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'net',
            authorLastName: 'test',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch(createProjectAC(project));
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default projectReducer