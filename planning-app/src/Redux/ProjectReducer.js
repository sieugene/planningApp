const CREATE_PROJECT = 'CREATE_PROJECT'

let initialState = {
    projects: [
        {
            id: '1',
            title: 'Awesome text',
            content: 'Etiam faucibus ut ante quis congue. Nam vel feugiat nisl. Aliquam ac ' +
                'nunc dignissim, auctor odio sit amet, condimentum augue. Fusce at lectus diam.'
        },
        {
            id: '2', title: 'SSS', content: '' +
                'Nullam lobortis, ipsum nec finibus tempor, nunc ' +
                'tortor gravida lorem, non tempor ante augue non urna. Donec lobortis arcu leo, sed gravida'
        },
        {id: '3', title: 'some tested text3', content: ' lorem. Morbi a venenatis magna. Donec se'}
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