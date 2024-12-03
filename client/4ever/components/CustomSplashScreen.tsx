import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Dimensions } from 'react-native';
import CustomSplashScreenCss from './styles/CustomSplashScreenCSS';

const CustomSplashScreen: React.FC = () => {
  return (
    <View style={CustomSplashScreenCss.container}>
      <Image 
        source={require('../assets/images/logo.png')} 
        style={CustomSplashScreenCss.logo} 
        resizeMode="contain" 
      />
      <ActivityIndicator size="large" color="#ffffff" style={CustomSplashScreenCss.loadingIndicator} />
    </View>
  );
};

export default CustomSplashScreen;

