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
        default:
            return state
    }
}


export default projectReducer