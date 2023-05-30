import React, {useEffect} from "react"
import {getAuth, signInAnonymously } from 'firebase/auth'
import {getToken, onMessage} from "firebase/messaging"
import {messaging} from "./firebase"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const login = () => {
    signInAnonymously(getAuth()).then(user => {
      console.log(user);
    })
  }

  const activateMessaging = async () =>{
    const token = await getToken(messaging,{vapidKey: 'BE8A9NSXGRhQI2znY_Oe1NQHgRpEbzal_lqXvTTJFiAOSMmbLrHLklLR_NXOoA-J8Ip5927QChnOG41vivQgQOk'})
    .catch(() => console.log("error al generar el token"))
    if (token) {
      console.log(token);
    }else{
      console.log("no tienes token");
    }
  }
  useEffect(() => {
    onMessage(messaging, message => {
      console.log("tu m ensaje", message);
      toast(message.notification.title)
    })
  }, [])
  

  return (
    <div>
      <h1>Test de notificaciones</h1>
      <ToastContainer />
      <button onClick={login}>
        Iniciar sesión
      </button>
      <button onClick={activateMessaging}>
        Generar token
      </button>
    </div>
  );
}

export default App;
