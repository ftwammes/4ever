import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import markedCss from '../styles/markedCss';
import { useCallback, useEffect, useState } from 'react';
import Connector from '@/utils/Connector';
import NewsCard from '@/components/NewsCard';

const exampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAC3qXK/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK8AAACvABQqw0mAAAABlBMVEX///8AAABVwtN+AAAASElEQVR4nO3BMQEAAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIDmBzAAAf8whsQAAAABJRU5ErkJggg==';

interface NewsInterface {
  id: string;
  title: string;
  postedAt: string;
  image: string;
}

export default function Marked() {
  const [news, setNews] = useState<NewsInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = useCallback(
    async (reset = false) => {
      if (loading && !reset && hasMore) return;

      if (reset) {
        setNews([]);
        setHasMore(true);
      }

      setLoading(true);
      try {
        const offset = reset ? 0 : news.length;
        const connector = new Connector();
        const data = (await connector.getMarkedNews(offset)).map(
          (news: any) => ({
            id: news.id,
            title: news.title,
            postedAt: news.postedAt,
            image: news.image
          })
        );

        if (data.length === 0) {
          setHasMore(false);
        } else {
          setNews((prev) => [...prev, ...data]);
        }
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      } finally {
        setLoading(false);
      }
    },
    [loading, news.length]
  );

  useEffect(() => {
    fetchNews(true);
  }, []);

  return (
    <View style={markedCss.container}>
      <FlatList
          onEndReached={() => fetchNews()}
          onEndReachedThreshold={0.5}
          data={news}
          keyExtractor={(item) => item.id}
          style={markedCss.containerList}
          renderItem={({ item }) => (
            <NewsCard
              id={item.id}
              title={item.title}
              imageBase64={item.image}
              timestamp={item.postedAt}
            />
          )} />
    </View>
  );
}

