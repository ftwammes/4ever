import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import newsCardCSS from './css/NewsCardCSS';


interface CardProps {
  id: string;
  title: string;
  imageBase64: string;
  timestamp: string;
}

const NewsCard: React.FC<CardProps> = ({ id, title, imageBase64, timestamp }) => {
  return (
    <View style={newsCardCSS.cardContainer}>
      <ImageBackground
        source={{ uri: imageBase64 }}
        style={newsCardCSS.imageBackground}
        imageStyle={newsCardCSS.imageStyle}
      >
        <View style={newsCardCSS.overlay}>
          <Text style={newsCardCSS.title}>{title}</Text>
          <Text style={newsCardCSS.timestamp}>{timestamp}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;
