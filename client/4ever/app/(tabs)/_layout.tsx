import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Tabs } from 'expo-router';
import find from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import logo from '../../assets/images/logoTopBar.png';
import home from '../../assets/images/home.png';
import notification from '../../assets/images/notification.png';
import favorities from '../../assets/images/favorites.png';
import engine from '../../assets/images/engine.png';


// Função para renderizar os ícones nas tabs
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { backgroundColor: '#178591' }, 
        headerStyle: { backgroundColor: '#178591' }, 
        headerTintColor: 'white', 
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Image
              source={logo} 
            />
          ),
          tabBarIcon: ({ }) =>
            <Image
              source={home} 
            />,
          tabBarLabel: "",
          headerRight: () => (

            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <Image
                  source={find} 
                  resizeMode="contain"
                />
              </Pressable>

              <Pressable onPress={() => { }}>
                <Image
                  source={user} 
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerTitle: () => (
            <Image
              source={logo} 
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={notification} 
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <Image
                  source={find} 
                  resizeMode="contain"
                />
              </Pressable>

              <Pressable onPress={() => { }}>
                <Image
                  source={user} 
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="marked"
        options={{
          headerTitle: () => (
            <Image
              source={logo} 
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={favorities} 
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <Image
                  source={find} 
                  resizeMode="contain"
                />
              </Pressable>

              <Pressable onPress={() => { }}>
                <Image
                  source={user} 
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerTitle: () => (
            <Image
              source={logo} 
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={engine} 
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <Image
                  source={find} 
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable onPress={() => { }}>
                <Image
                  source={user} 
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}