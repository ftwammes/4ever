import { FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import NewsCard from '@/components/NewsCard';
import indexCss from '../styles/indexCss';
import CategoryTabs from '@/components/CategoryTab'; // Certifique-se de importar o caminho corretamente
import { useCallback, useEffect, useState } from 'react';
import Connector from '@/utils/Connector';

const exampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAC3qXK/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK8AAACvABQqw0mAAAABlBMVEX///8AAABVwtN+AAAASElEQVR4nO3BMQEAAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIDmBzAAAf8whsQAAAABJRU5ErkJggg==';

interface NewsInterface {
  id: string;
  title: string;
  postedAt: string;
  image: string;
}

export default function Home() {
  const [news, setNews] = useState<NewsInterface[]>([]);
  const [category, setCategory] = useState(0);
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
        const data = (await connector.getNews(offset, category)).map(
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
    [loading, news.length, category]
  );

  useEffect(() => {
    fetchNews(true);
  }, [category]);

  const handleChangeCategory = (category: number) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, width:'100%'}}>
      <CategoryTabs handleChangeCategory={handleChangeCategory} />
      <View style={indexCss.container}>
        <FlatList
          onEndReached={() => fetchNews()}
          onEndReachedThreshold={0.5}
          data={news}
          keyExtractor={(item) => item.id}
          style={indexCss.containerList}
          renderItem={({ item }) => (
            <NewsCard
              id={item.id}
              title={item.title}
              imageBase64={item.image}
              timestamp={item.postedAt}
            />
          )} />
      </View>
    </View>
  );
}