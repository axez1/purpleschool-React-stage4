const INITIAL_STATE = {
  isValid: {
    name: true
  },
  values: {
    name: ''
  },
  isFormReadyToSubmit: false
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...action.values, ...action.payload } };
    case 'CLEAR':
      return { ...state, values: INITIAL_STATE.values };
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
      const nameValidity = state.values.name?.trim().length;

      return {
        ...state,
        isValid: {
          name: !!nameValidity
        },
        isFormReadyToSubmit: !!nameValidity
      }
    };
    default:
      return state;
  }
}

export { INITIAL_STATE, formReducer }