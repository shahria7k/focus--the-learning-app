import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier, signOut as logOut } from "@firebase/auth";
import { useState, useEffect } from "react";
import initializeFirabase from '../../fire_base/firebase.initialize';

initializeFirabase();
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user);
                setError(null);
            })
            .catch(error => setError(error));
    };
    const signUpUsingPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                setError(null);
            })
            .catch(error => {
                setError(error);
                console.log(error);
            });
    };
    const signInUsingOTP = (country, number, captchContainer) => {
        const appVerifier = new RecaptchaVerifier(captchContainer, {
            'size': 'normal',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                // console.log(response);


            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...

            }
        }, auth);
        signInWithPhoneNumber(auth, country + number, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // ...
                const code = prompt("enter otp");
                confirmationResult.confirm(code).then((res) => {
                    // User signed in successfully.
                    setUser(res.user);
                    setError(null);
                    // ...
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    console.log(error);
                });
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                setError(error);
            });
    };
    const signOut = () => {
        logOut(auth)
            .then(() => {
                setUser(null);
                setError(null);
            })
            .catch(error => {
                setError(error);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setError(null);
            } else {
                setUser(null);
            }
        }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signUpUsingPassword,
        signInUsingOTP,
        signOut
    };

};
export default useFirebase;
