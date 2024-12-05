import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Tabs } from 'expo-router';

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
          title: '4ever',
          tabBarIcon: ({ }) => 
          <TabBarIcon name="home" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <FontAwesome
                  name="search" 
                  size={25}
                  color="white"
                />
              </Pressable>

              <Pressable onPress={() => {}}>
                <FontAwesome
                  name="user"
                  size={25}
                  color="white"
                />
              </Pressable>
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="notification"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="bell" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <FontAwesome
                  name="search" 
                  size={25}
                  color="white"
                />
              </Pressable>

              <Pressable onPress={() => {}}>
                <FontAwesome
                  name="user"
                  size={25}
                  color="white"
                />
              </Pressable>
            </View>
          ),
        }}
      />
        <Tabs.Screen
        name="marked"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="bookmark" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}>
                <FontAwesome
                  name="search" 
                  size={25}
                  color="white"
                />
              </Pressable>

              <Pressable onPress={() => {}}>
                <FontAwesome
                  name="user"
                  size={25}
                  color="white"
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="cog" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Pressable style={{ marginRight: 20 }}> 
                <FontAwesome
                  name="search"
                  size={25}
                  color="white"
                />
              </Pressable>
              <Pressable onPress={() => {}}>
                <FontAwesome
                  name="user"
                  size={25}
                  color="white"
                />
              </Pressable>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
