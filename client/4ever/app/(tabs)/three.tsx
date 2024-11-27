import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     

      {/* Perfil do usuário */}
      <View style={styles.profileContainer}>
        <Icon name="account-circle" size={100} color="#007b7f" />
        <Text style={styles.profileText}>acesse sua conta</Text>
        <Text style={styles.profileSubText}>ou cadastre-se grátis</Text>
      </View>

      {/* Opções */}
      <View style={styles.optionsContainer}>
        {/* Notificações */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionContent}>
            <Icon name="bell" size={24} color="#007b7f" />
            <Text style={styles.optionText}>Notificações</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#007b7f" />
        </TouchableOpacity>

        {/* Modo escuro */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionContent}>
            <Icon name="moon-waning-crescent" size={24} color="#007b7f" />
            <Text style={styles.optionText}>Modo escuro</Text>
          </View>
        </TouchableOpacity>

        {/* Avalie o aplicativo */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionContent}>
            <Icon name="star" size={24} color="#007b7f" />
            <Text style={styles.optionText}>Avalie o aplicativo</Text>
          </View>
        </TouchableOpacity>

        {/* Versão do app */}
        <View style={styles.option}>
          <View style={styles.optionContent}>
            <Icon name="information" size={24} color="#007b7f" />
            <Text style={styles.optionText}>Versão do app</Text>
          </View>
          <Text style={styles.versionText}>1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 50,
    backgroundColor: '#007b7f',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  profileContainer: {
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
    paddingHorizontal: 15,
  },
  option: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
