import { StyleSheet } from 'react-native';

const userCss = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  header: {
    height: 50,
    backgroundColor: '#007b7f',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007b7f',
    marginTop: 10,
  },
  profileSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  optionsContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  option: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#007b7f',
    marginLeft: 10,
  },
  versionText: {
    fontSize: 16,
    color: '#007b7f',
  },
});

export default userCss;
