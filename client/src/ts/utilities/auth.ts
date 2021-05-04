import firebase from 'firebase';

export const signIn = async (email: string, password: string) => {
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
  let userInfo;
  if (user && user.email && user.displayName) {
    userInfo = {
      email: user.email,
      displayName: user.displayName,
    };
  }
  return userInfo;
};

export const signOut = async () => {
  try {
    const user = await firebase.auth().signOut();
    alert(`サインアウトしました:  ${user}`);
  } catch (error) {
    alert(error.message);
  }
};
