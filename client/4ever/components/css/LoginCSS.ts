import { StyleSheet, Dimensions } from 'react-native';
const loginCss = StyleSheet.create({
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
      width: 275,
      height: 174,
      marginBottom: 50,
      opacity: 0.1, 
  },
  inputContainer: {
      width: '90%',
      backgroundColor: '#D9D9D9', 
      borderRadius: 15,
      padding: 5,
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

export default loginCss;