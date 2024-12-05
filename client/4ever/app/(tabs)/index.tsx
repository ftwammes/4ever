import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Card from '@/components/NewsCard';
import indexCss from '../styles/indexCss';
import CategoryTabs from '@/components/CategoryTab'; // Certifique-se de importar o caminho corretamente

const exampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAC3qXK/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK8AAACvABQqw0mAAAABlBMVEX///8AAABVwtN+AAAASElEQVR4nO3BMQEAAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIDmBzAAAf8whsQAAAABJRU5ErkJggg==';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CategoryTabs />
      <View style={indexCss.container}>
        <Card
          title="Clã BFF parte em missão"
          subtitle="para recuperar o Pergaminho da Verdade!"
          imageBase64={exampleBase64} 
          timestamp="26/11/2024 - 08:00"
        />
      </View>
    </View>
  );
}