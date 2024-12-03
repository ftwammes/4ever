import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomSplashScreenCss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BA3AD', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8, 
    height: height * 0.4, 
  },
  loadingIndicator: {
    marginTop: 20, 
  },
});

export default CustomSplashScreenCss;
