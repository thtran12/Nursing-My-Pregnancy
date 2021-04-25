import firebase from "../../firebase/firebase";
// import { useHistory } from "react-router-dom";

const auth = firebase.auth();

function SignOut() {
  // const history = useHistory();
  const onSignOut = async () => {
    try {
      await auth.signOut();
      // history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  // const onSignOut = () => history.push("/");

  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => onSignOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
