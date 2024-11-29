import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';

const CustomRegisterScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Imagem no topo */}
            <Image
                source={require('../assets/images/logo.png')} // Substitua pelo caminho correto do logo
                resizeMode="contain"
                style={styles.logo}
            />

            {/* Bloco branco contendo os campos */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#00000080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    placeholderTextColor="#00000080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento"
                    placeholderTextColor="#00000080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#00000080"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#00000080"
                    secureTextEntry
                />
            </View>

            {/* Botão de Cadastrar */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomRegisterScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#178591', // Cor de fundo
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: '50%',
        height: '20%',
        marginBottom: '10%',
        opacity: 0.1, // Transparência na imagem
    },
    inputContainer: {
        width: '90%',
        backgroundColor: '#D9D9D9', // Fundo branco para os campos
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        elevation: 3, // Sombra no Android
        shadowColor: '#000', // Sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40, // Altura reduzida
        backgroundColor: '#A9C9CC', // Cor de fundo dos inputs
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 8,
        fontSize: 14,
        color: '#00000080',
    },
    button: {
        backgroundColor: '#C6D1D2',
        width: 130,
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
});
