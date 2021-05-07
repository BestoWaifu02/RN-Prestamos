import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import Auth from "./src/components/Auth";
import firebase from "./src/utils/firebase";
import "firebase/auth/";
import Cotizador from "./src/components/Cotizador";
export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <Logout email={user.email} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

function Logout({ email }) {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <SafeAreaView 
    >
      <Cotizador email={email} />

      <Button style={styles.btnCerrarSesion} title="cerrar sesión" onPress={logout}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#351D2D",
    height: "100%",
    
  },
  btnCerrarSesion:{
    position:'absolute',
    bottom:0
  },
  body:{
    position:'relative'
  }
});
