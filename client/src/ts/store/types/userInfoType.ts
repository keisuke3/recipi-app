type State = {
  email: string;
  displayName: string;
};

type IMutations = {
  signUp: {
    email: string;
    displayName: string;
  };
};

type IActions = {
  signUp: {
    email: string;
    password: string;
    displayName: string;
  };
};

export { State, IMutations, IActions };
