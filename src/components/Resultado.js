import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Resultado = ({ Nombre, Sueldo, Cantidad, Meses }) => {
  let interes = 0;
  Sueldo <= 10000
    ? (interes = 0.02)
    : Sueldo > 1000 && Sueldo <= 20000
    ? (interes = 0.04)
    : (interes = 0.06);

  let IVA = parseInt(Cantidad) * 0.16;
  /*   ((IVA + Cantidad) / Meses) * interes + (Cantidad + IVA) / Meses
   */ return (
    <View >
      <Text  style={styles.texts}>{`Nombre del usuario: ${Nombre}`}</Text>
      <Text style={styles.texts}>{`Cantidad Solicitada de prestamo: ${Cantidad}`}</Text>
      <Text style={styles.texts}>{`Interes: ${interes}%`}</Text>
      <Text style={styles.texts}>{`IVA del prestamo: ${0.16 * parseInt(Cantidad)}`}</Text>
      <Text style={styles.texts}>{ `Cantidad a pagar mensualmente: ${((IVA + parseInt(Cantidad)) / parseInt(Meses)) * interes + (parseInt(Cantidad) + IVA) / parseInt(Meses)}` }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texts:{
    fontSize:20,
    marginVertical:20
    
  },
  conatiner:{
    
  }
})