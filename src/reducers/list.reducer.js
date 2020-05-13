const lists = (state = [
    {
        id: 0,
        text: "raz"
    },
    {
        id: 1,
        text: "que",
    },
    {
        id: 2,
        text: "apsik",
    }
], action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ];
        case 'DELETE_FROM_LIST':
            return state.filter(item => item.id !== action.id);
        default: return state;
    }

}

export default lists