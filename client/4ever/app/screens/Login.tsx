import React from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native';
import loginCss from '../styles/LoginCSS';
import logo from '../../assets/images/logo.png';

const CustomLoginScreen: React.FC = () => {
    return (
        <View style={loginCss.container}>
            <Image
                source={logo} // Substitua pelo caminho correto do logo
                resizeMode="contain"
                style={loginCss.logo}
            />

            <View style={loginCss.inputContainer}>
                <TextInput
                    style={loginCss.input}
                    placeholder="Usuário"
                    placeholderTextColor="#00000080"
                />
                <TextInput
                    style={loginCss.input}
                    placeholder="Senha"
                    placeholderTextColor="#00000080"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={loginCss.button}>
                <Text style={loginCss.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={loginCss.footerText}>
                Não tem conta?{' '}
                <Text style={loginCss.link} onPress={() => alert('Criar conta')}>
                    Criar conta
                </Text>{' '}
                ou{' '}
                <Text style={loginCss.link} onPress={() => alert('Cadastrar-se mais tarde')}>
                    Cadastrar-se mais tarde
                </Text>
            </Text>
        </View>
    );
};

export default CustomLoginScreen;

