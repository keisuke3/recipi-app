type State = {
  email: string;
  userName: string;
  errorMessage: string;
};

type IMutations = {
  signUp: {
    email: string;
    userName: string;
  };
  signIn: {
    email: string;
    userName: string;
  };
  errorMessage: string;
};

type IActions = {
  signUp: {
    userName: string;
    email: string;
    password: string;
  };
  signIn: {
    email: string;
    password: string;
  };
};

export { State, IMutations, IActions };
