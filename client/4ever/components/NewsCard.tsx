import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import newsCardCSS from './css/NewsCardCSS';


interface CardProps {
  title: string;
  subtitle: string;
  imageBase64: string;
  timestamp: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, imageBase64, timestamp }) => {
  return (
    <View style={newsCardCSS.cardContainer}>
      <ImageBackground
        source={{ uri: `data:image/png;base64,${imageBase64}` }}
        style={newsCardCSS.imageBackground}
        imageStyle={newsCardCSS.imageStyle}
      >
        <View style={newsCardCSS.overlay}>
          <Text style={newsCardCSS.title}>{title}</Text>
          <Text style={newsCardCSS.subtitle}>{subtitle}</Text>
          <Text style={newsCardCSS.timestamp}>{timestamp}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
