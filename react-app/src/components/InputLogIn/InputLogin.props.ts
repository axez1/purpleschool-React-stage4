export interface InputLogInProps {
  onSubmit: (name: string) => void;
}

export interface FormState {
  isValid: {
    name: boolean;
  };
  values: {
    name: string;
  };
  isFormReadyToSubmit: boolean;
}
