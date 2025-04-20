type FormAction =
  | { type: 'SET_VALUE'; payload: Record<string, string> }
  | { type: 'CLEAR' }
  | { type: 'RESET_VALIDITY' }
  | { type: 'SUBMIT' };

export interface FormState {
  isValid: {
    name: boolean;
  };
  values: {
    name: string;
  };
  isFormReadyToSubmit: boolean;
}

const INITIAL_STATE: FormState = {
  isValid: {
    name: true,
  },
  values: {
    name: '',
  },
  isFormReadyToSubmit: false,
};

function formReducer(state: typeof INITIAL_STATE, action: FormAction) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'CLEAR':
      return { ...state, values: INITIAL_STATE.values };
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
      const nameValidity = state.values.name?.trim().length;

      return {
        ...state,
        isValid: {
          name: !!nameValidity,
        },
        isFormReadyToSubmit: !!nameValidity,
      };
    }
    default:
      return state;
  }
}

export { INITIAL_STATE, formReducer };
