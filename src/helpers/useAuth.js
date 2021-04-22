import { useState, useEffect } from 'react';

import { firebase } from './firebase';

const useAuth = () => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser?.uid) {
        firebase.database().ref(`users/${firebaseUser.uid}`).once('value', (snapshot) => {
          if (snapshot.exists()) {
            setUser(snapshot.val());
            setUserLoading(false);
          } else {
            setUser(null);
            setUserLoading(false);
            firebase.auth().signOut();
          }
        });
      } else {
        setUser(null);
        setUserLoading(false);
      }
    });
  }, []);

  return [userLoading, user];
};

export default useAuth;
