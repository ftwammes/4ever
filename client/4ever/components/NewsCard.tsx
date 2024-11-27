import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

interface CardProps {
  title: string;
  subtitle: string;
  imageBase64: string;
  timestamp: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, imageBase64, timestamp }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: `data:image/png;base64,${imageBase64}` }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%', // Ocupa 95% da largura da tela para melhor responsividade
    height: Dimensions.get('window').height * 0.25, // Ajusta o tamanho do card com base na altura da tela
    borderRadius: 15, // Cantos mais arredondados
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000', // Sombra para destacar o card
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Sombra para Android
    backgroundColor: '#fff', // Cor de fundo para evitar bordas transparentes em algumas situações
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15, // Ajusta os cantos da imagem
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo mais escuro para destacar o texto
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 20, // Título mais destacado
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#bbb',
    textAlign: 'right', // Alinha o timestamp à direita
  },
});

export default Card;
