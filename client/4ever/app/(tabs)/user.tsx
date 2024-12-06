import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import userCss from '../styles/user';
import user from '../../assets/images/userBlue.png';


export default function User() {
  return (
    <View style={userCss.container}>

      {/* Perfil do usuário */}
      <View style={userCss.profileContainer}>
        <Image
          source={user} // Substitua pelo caminho correto para o logo
          style={userCss.logo}
        />
        <Text style={userCss.profileText}>acesse sua conta</Text>
        <Text style={userCss.profileSubText}>ou cadastre-se grátis</Text>
      </View>

      {/* Opções */}
      <View style={userCss.optionsContainer}>
        {/* Notificações */}
        <TouchableOpacity style={userCss.option}>
          <View style={userCss.optionContent}>
            <Icon name="bell" size={24} color="#007b7f" />
            <Text style={userCss.optionText}>Notificações</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#007b7f" />
        </TouchableOpacity>

        {/* Modo escuro */}
        <TouchableOpacity style={userCss.option}>
          <View style={userCss.optionContent}>
            <Icon name="moon-waning-crescent" size={24} color="#007b7f" />
            <Text style={userCss.optionText}>Modo escuro</Text>
          </View>
        </TouchableOpacity>

        {/* Avalie o aplicativo */}
        <TouchableOpacity style={userCss.option}>
          <View style={userCss.optionContent}>
            <Icon name="star" size={24} color="#007b7f" />
            <Text style={userCss.optionText}>Avalie o aplicativo</Text>
          </View>
        </TouchableOpacity>

        {/* Versão do app */}
        <View style={userCss.option}>
          <View style={userCss.optionContent}>
            <Icon name="information" size={24} color="#007b7f" />
            <Text style={userCss.optionText}>Versão do app</Text>
          </View>
          <Text style={userCss.versionText}>1.0.0</Text>
        </View>
      </View>
    </View>
  );
}


