import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Tabs } from 'expo-router';

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
        tabBarStyle: { backgroundColor: '#178591' }, // Cor do fundo da barra de navegação
        headerStyle: { backgroundColor: '#178591' }, // Cor de fundo do cabeçalho
        headerTintColor: 'white', // Cor do texto do cabeçalho
        headerTitleStyle: { fontWeight: 'bold' },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Tela principal */}
      <Tabs.Screen
        name="index"
        options={{
          title: '4ever',
          tabBarIcon: ({ }) => 
          <TabBarIcon name="home" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <FontAwesome
                  name="search" // Ícone de busca
                  size={25}
                  color="white"
                />
              </Pressable>

              {/* Ícone de Perfil */}
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
       {/* Tab 1 */}
       <Tabs.Screen
        name="notification"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="bell" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <FontAwesome
                  name="search" // Ícone de busca
                  size={25}
                  color="white"
                />
              </Pressable>

              {/* Ícone de Perfil */}
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
        {/* Tab 2 */}
        <Tabs.Screen
        name="marked"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="bookmark" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <FontAwesome
                  name="search" // Ícone de busca
                  size={25}
                  color="white"
                />
              </Pressable>

              {/* Ícone de Perfil */}
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
      {/* Tab 3 */}
      <Tabs.Screen
        name="user"
        options={{
          title: '4ever',
          tabBarIcon: ({ color }) => 
          <TabBarIcon name="cog" color={"white"} />, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <FontAwesome
                  name="search" // Ícone de busca
                  size={25}
                  color="white"
                />
              </Pressable>

              {/* Ícone de Perfil */}
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
