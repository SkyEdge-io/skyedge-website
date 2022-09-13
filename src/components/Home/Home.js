import './Home.css';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import scrolldown from '../../assets/scroll-down.svg';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const Home = () => {
  const [userEmail, setUserEmail] = useState('');
  const [joinMsg, setJoinMsg] = useState(0);

  const handleInput = (e) => {
    setUserEmail(e.target.value);
  };

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCCQDabu3b2Q7B6hXC4BAoXv8EW1sRqL9E",
    authDomain: "skyedge.firebaseapp.com",
    projectId: "skyedge",
    storageBucket: "skyedge.appspot.com",
    messagingSenderId: "801889767677",
    appId: "1:801889767677:web:95adf9581873b94f786e94"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firebaseConfig)
    try {
      const docRef = doc(db, "emails", "CaBVCRuCnabscb1pMiv5");
      await updateDoc(docRef, {
        "email-list": arrayUnion(userEmail)
      });
      console.log("Document written with ID: ", docRef.id);
      setJoinMsg(true);
      setTimeout(() => setJoinMsg(0), 2000);
      setUserEmail('');
    } catch (e) {
      console.error("Error adding document", e);
    }
  };

  const spline = (
    <div className="spline">
      <Spline scene="https://prod.spline.design/66GC2JNzbIEqjhb2/scene.splinecode" />
    </div>
  );
 
  return (
    <div className="container home">
      <h1>Making distributed computing native to mobile</h1>
      <p>Building the future of data and ML on edge devices</p>
      <form onSubmit={handleSubmit} className={joinMsg ? "join-msg" : ""}>
        <input type="email" className="email-input" placeholder="email ID" value={userEmail} onChange={handleInput} required/>
        <input type="submit" value="Join the waitlist" className="email-submit"/>
      </form>
      <img src={scrolldown} className="scrolldown" />
   </div>
  )
};

export default Home;
