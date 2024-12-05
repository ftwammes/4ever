import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationList from '@/components/NotificationList';
import notificationListCss from '../styles/notificationCss';



export default function TabTwoScreen() {

  return (
    <View style={notificationListCss.container}>
      <SafeAreaView style={notificationListCss.container}>
      <NotificationList/>
    </SafeAreaView>
    </View>
  );
}

