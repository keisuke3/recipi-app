type State = {
  email: string;
  displayName: string;
  errorMessage: string;
};

type IMutations = {
  signUp: {
    email: string;
    displayName: string;
  };
  signIn: {
    email: string;
    displayName: string;
  };
  errorMessage: string;
};

type IActions = {
  signUp: {
    displayName: string;
    email: string;
    password: string;
  };
  signIn: {
    email: string;
    password: string;
  };
};

export { State, IMutations, IActions };
