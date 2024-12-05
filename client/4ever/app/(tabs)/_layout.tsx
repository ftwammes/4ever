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
          headerTitle: () => (
            <Image
              source={logo} // Substitua pelo caminho correto para o logo
            />
          ),
          tabBarIcon: ({ }) =>
            <Image
              source={home} // Substitua pelo caminho correto para o logo
            />,
          tabBarLabel: "",
          headerRight: () => (

            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <Image
                  source={find} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
                />
              </Pressable>

              {/* Ícone de Perfil */}
              <Pressable onPress={() => { }}>
                <Image
                  source={user} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
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
          headerTitle: () => (
            <Image
              source={logo} // Substitua pelo caminho correto para o logo
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={notification} // Substitua pelo caminho correto para o logo
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <Image
                  source={find} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
                />
              </Pressable>

              {/* Ícone de Perfil */}
              <Pressable onPress={() => { }}>
                <Image
                  source={user} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
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
          headerTitle: () => (
            <Image
              source={logo} // Substitua pelo caminho correto para o logo
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={favorities} // Substitua pelo caminho correto para o logo
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <Image
                  source={find} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
                />
              </Pressable>

              {/* Ícone de Perfil */}
              <Pressable onPress={() => { }}>
                <Image
                  source={user} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
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
          headerTitle: () => (
            <Image
              source={logo} // Substitua pelo caminho correto para o logo
            />
          ),
          tabBarIcon: ({ color }) =>
            <Image
              source={engine} // Substitua pelo caminho correto para o logo
            />,
          tabBarLabel: "",
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              {/* Ícone de Busca */}
              <Pressable style={{ marginRight: 20 }}> {/* Adiciona margem direita para espaço */}
                <Image
                  source={find} // Substitua pelo caminho correto do logo
                  resizeMode="contain"
                />
              </Pressable>

              {/* Ícone de Perfil */}
              <Pressable onPress={() => { }}>
                <Image
                  source={user} // Substitua pelo caminho correto do logo
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