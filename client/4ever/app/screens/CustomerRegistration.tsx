import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../../assets/images/logo.png';

const CustomRegisterScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={logo} 
                resizeMode="contain"
                style={styles.logo}
            />

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
        backgroundColor: '#178591', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: '50%',
        height: '20%',
        marginBottom: '10%',
        opacity: 0.1, 
    },
    inputContainer: {
        width: '90%',
        backgroundColor: '#D9D9D9', 
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40, 
        backgroundColor: '#A9C9CC', 
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
