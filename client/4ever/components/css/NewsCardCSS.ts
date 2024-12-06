import { StyleSheet, Dimensions } from 'react-native';

const newsCardCSS = StyleSheet.create({
    cardContainer: {
      width: '95%', 
      height: Dimensions.get('window').height * 0.25, 
      borderRadius: 15, 
      overflow: 'hidden',
      marginTop: 20,
      alignSelf: 'center',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5, 
      backgroundColor: '#fff', 
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    imageStyle: {
      borderRadius: 15
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      padding: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    title: {
      fontSize: 20, 
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
      textAlign: 'right', 
    },
  });

  export default newsCardCSS;