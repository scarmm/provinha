import React from "react";
import { Text, View, } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export const telaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto} >🐵🐵🐵🐵🐵🐵🐵🐵🐵</Text>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Login")}>Clique me</Button>
        </View>
    )
}
