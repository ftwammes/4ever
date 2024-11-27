import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationList from '@/components/NotificationList';

export default function TabTwoScreen() {
  // Exemplo de lista de notificações
  const notifications = [
    {
      id: '1',
      title: 'Novo Clã Emergiu',
      description: 'Conheça os Amigos Best Friends Forever e Nem Sei o que é Forever!',
    },
    {
      id: '2',
      title: 'Últimas Atualizações',
      description: 'Clã Amigos Best Friends Forever avança pela Floresta do Silêncio.',
    },
    {
      id: '3',
      title: 'Atualização da Missão',
      description: 'Pergaminho da Verdade ainda não encontrado.',
    },
    {
      id: '4',
      title: 'Exploradores Recomendam',
      description:
        'Fique Atualizado com as Últimas Novidades sobre o Clã Amigos Best Friends Forever.',
    },
    {
      id: '5',
      title: 'Novidades Quentes',
      description: 'Reviravoltas na Busca pelo Pergaminho da Verdade!',
    },
    {
      id: '6',
      title: 'Riscos Aumentam',
      description: 'Bruxas da Floresta do Silêncio Estão em Movimento!',
    },
    {
      id: '7',
      title: 'Alerta de Atualizações',
      description: 'Clã Amigos Best Friends Forever Descobre Nova Pista!',
    },
    {
      id: '8',
      title: 'Mistério Profundo',
      description: 'O que Está Escondido nas Sombras da Floresta do Silêncio?',
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      {/* Componente de Notificações */}
      <NotificationList notifications={notifications} />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
