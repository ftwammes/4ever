import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Dimensions } from 'react-native';

const CustomSplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo que ocupa grande parte da tela */}
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      {/* Indicador de carregamento centralizado */}
      <ActivityIndicator size="large" color="#ffffff" style={styles.loadingIndicator} />
    </View>
  );
};

export default CustomSplashScreen;

const { width, height } = Dimensions.get('window'); // Obtém dimensões da tela

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BA3AD', // Fundo colorido
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8, // 80% da largura da tela
    height: height * 0.4, // 40% da altura da tela
  },
  loadingIndicator: {
    marginTop: 20, // Espaço entre a logo e o indicador de carregamento
  },
});
