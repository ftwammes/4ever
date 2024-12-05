import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import notificationListCSS from './css/NotificationListCSS';
import Connector from '../utils/Connector';

interface Notification {
  id: string;
  notification: string;
}

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNotifications = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const connector = new Connector();
      const data = (await connector.getUserNotifications(notifications.length)).map(
        (notification: any) => ({
          id: notification.id,
          notification: notification.notification,
        })
      );

      if (data.length === 0) {
        setHasMore(false); // Não há mais dados para carregar
      } else {
        setNotifications((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error('Erro ao carregar notificações:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, notifications.length]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <View style={notificationListCSS.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={notificationListCSS.notificationCard}>
            <Text style={notificationListCSS.description}>{item.notification}</Text>
          </View>
        )}
        contentContainerStyle={notificationListCSS.listContent}
        onEndReached={fetchNotifications} // Chamado ao atingir o final da lista
        onEndReachedThreshold={0.5} // Define a porcentagem do final para disparar a função
      />
    </View>
  );
};

export default NotificationList;