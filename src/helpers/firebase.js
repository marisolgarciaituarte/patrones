import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auxFirebaseAuthUser = firebase.initializeApp(firebaseConfig, 'auth-user');
const auxFirebaseCreateUser = firebase.initializeApp(firebaseConfig, 'create-user');

export const createUser = ({ firstName, lastName, email, password }) => {
  return new Promise((resolve, reject) => {
    auxFirebaseCreateUser.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        auxFirebaseCreateUser.auth().signOut();
        auxFirebaseAuthUser.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            auxFirebaseAuthUser.database().ref(`users/${user.uid}`).set({
              firstName,
              lastName,
              email,
              uid: user.uid,
            })
              .then(() => {
                auxFirebaseAuthUser.auth().signOut();
                resolve();
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  })
};

export const loginUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject);
  });
};

export const registerUser = (props) => {
  return new Promise((resolve, reject) => {
    createUser(props)
      .then(() => {
        loginUser(props)
          .then(resolve)
          .catch(reject);
      })
      .catch(reject);
  });
};

export const recoverUser = (email) => {
  return new Promise((resolve, reject) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(resolve)
      .catch(reject);
  });
};

export { firebase };
