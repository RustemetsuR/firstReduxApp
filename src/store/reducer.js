const initialState = {
    passValue: '',
    numbersAmount: 0,
    passResult: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        if (state.numbersAmount !== 4) {
            return { ...state, passValue: state.passValue + action.value, numbersAmount: state.numbersAmount + 1 };
        }
    }

    if (action.type === 'DELETE') {
        if (state.numbersAmount !== 0) {
            return { ...state, passValue: state.passValue.slice(0, -1), numbersAmount: state.numbersAmount - 1 };
        }
    }

    if (action.type === 'CLEAR') {
            return { ...state, passValue: '', numbersAmount: 0, passResult: null};
    }

    if (action.type === 'CHECK') {
            return { ...state,  passResult: action.value};
    }

    return state;
};

export default reducer;