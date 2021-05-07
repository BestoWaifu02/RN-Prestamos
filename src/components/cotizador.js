import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RNPicker from "react-native-picker-select";
import { Resultado } from "./Resultado";

export default function Cotizador({ email }) {
  const [Cantidad, setCantidad] = useState("");
  const [Meses, setMeses] = useState("");
  const [Sueldo, setSueldo] = useState("");

  return (
    <View style={styles.viewForm}>
      <Text>Examen 2do Parcial </Text>
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          keyboardType="numeric"
          onChange={(e) => setCantidad(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sueldo"
          keyboardType="numeric"
          onChange={(e) => setSueldo(e.nativeEvent.text)}
        />
      </View>

      {Sueldo <= 10000 ? (
        <View>
          <RNPicker
            style={styles.inputAndroid}
            onValueChange={(value) => setMeses(value)}
            placeholder={{
              label: "Seleccione plazos...",
              value: null,
            }}
            items={[
              { label: "3 meses", value: 3 },
              { label: "6 meses", value: 6 },
            ]}
          />
        </View>
      ) : Sueldo > 10000 && Sueldo <= 20000 ? (
        <View>
          <RNPicker
            style={styles.inputAndroid}
            onValueChange={(value) => setMeses(value)}
            placeholder={{
              label: "Seleccione plazos...",
              value: null,
            }}
            items={[
              { label: "3 meses", value: 3 },
              { label: "6 meses", value: 6 },
              { label: "9 meses", value: 9 },
            ]}
          />
        </View>
      ) : (
        <View>
          <RNPicker
          
            style={styles.inputAndroid}
            onValueChange={(value) => setMeses(value)}
            placeholder={{
              label: "Seleccione plazos...",
              value: null,
            }}
            items={[
              { label: "3 meses", value: 3 },
              { label: "6 meses", value: 6 },
              { label: "9 meses", value: 9 },
              { label: "12 meses", value: 12 },
              { label: "24 meses", value: 24 },
            ]}
          />
        </View>
      )}

      {Meses != 0 ? (
        <Resultado 
          Nombre={email}
          Sueldo={Sueldo}
          Cantidad={Cantidad}
          Meses={Meses}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    
    marginHorizontal:'auto',
    position:'absolute',
    top: 80,
    width: "85%",
    paddingHorizontal: 50,
    borderRadius: 30,
    
    
  },
  viewInputs: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  input: {
    height: 60,
    backgroundColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#654A4F",
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#fff",
    paddingHorizontal: 20,
    placeholder:'#fff'
  },
  inputP: {
    width: "40%",
    marginLeft: 5,
  },
  
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#9b9b9b",
    borderRadius: 8,
    color: "#fff",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});

