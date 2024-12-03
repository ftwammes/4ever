import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import notificationListCSS from './css/NotificationListCSS';

interface Notification {
  id: string;
  title: string;
  description: string;
}

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <View style={notificationListCSS.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={notificationListCSS.notificationCard}>
            <Text style={notificationListCSS.title}>{item.title}</Text>
            <Text style={notificationListCSS.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={notificationListCSS.listContent}
      />
    </View>
  );
};


export default NotificationList;
