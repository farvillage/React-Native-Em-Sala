import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    
    const handleRegister = async () => {
        try {
            console.log('Registrando...');
            await createUserWithEmailAndPassword(auth, email, senha);
            Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
            navigation.replace('Main')
        }catch (error) {
            console.error('Erro ao registrar usuário:', error);
            Alert.alert('Erro!', error.message);
        }
    } 

    return (
    <View styles={styles.container}>
        <Text styles={styles.title}>Registre-se:</Text>

        <TextInput
            placeholder="Email"
            styles={styles.input}
            value={email}
            onChangeText={setEmail}>
        </TextInput>
        <TextInput
            placeholder="Senha"
            styles={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}>
        </TextInput>

        <Button title="Registrar" onPress={handleRegister}/>
        <Button title="Voltar para o Login" onPress={() => navigation.goBack()}/>
    </View>
    );
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8 },
})

export default RegisterScreen;