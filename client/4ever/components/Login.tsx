import React from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native';

const CustomLoginScreen: React.FC = () => {
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
                    placeholder="Usuário"
                    placeholderTextColor="#00000080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#00000080"
                    secureTextEntry
                />
            </View>

            {/* Botão de Entrar */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Links de cadastro */}
            <Text style={styles.footerText}>
                Não tem conta?{' '}
                <Text style={styles.link} onPress={() => alert('Criar conta')}>
                    Criar conta
                </Text>{' '}
                ou{' '}
                <Text style={styles.link} onPress={() => alert('Cadastrar-se mais tarde')}>
                    Cadastrar-se mais tarde
                </Text>
            </Text>
        </View>
    );
};

export default CustomLoginScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#178591', // Cor de fundo semelhante ao azul da imagem
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 275,
        height: 174,
        marginBottom: 50,
        opacity: 0.1, // Transparência na imagem
    },
    inputContainer: {
        width: '90%',
        backgroundColor: '#D9D9D9', // Fundo branco para os campos
        borderRadius: 15,
        padding: 5,
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
        fontSize: 14, // Fonte menor
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
        fontSize: 16
    },
    footerText: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
    },
    link: {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
