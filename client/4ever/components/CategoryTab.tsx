import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import categoryCSS from './css/CategoryTabCSS'
import Connector from '@/utils/Connector';
interface Category {
    id: number;
    name: string;
}
interface CategoryTabsProps {
    handleChangeCategory: (category: number) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ handleChangeCategory }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState(1);

    const fetchCategories = async () => {
        try {
            const connector = new Connector();
            const data = (await connector.getSubscribedCategory()).map(
                (cat: any) => ({
                    id: cat.id,
                    name: cat.name
                })
            );

            handlePress(data[0].id);

            setCategories(data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handlePress = (id: number) => {
        setSelectedCategory(id);
        handleChangeCategory(id);
    };

    return (
        <View style={categoryCSS.tabContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={categoryCSS.scrollContainer}
            >
                {categories.map((category) => {
                    return (
                        <TouchableOpacity
                            key={category.id}
                            style={categoryCSS.tab}
                            onPress={() => handlePress(category.id)}
                        >
                            <Text
                                style={[
                                    categoryCSS.tabText,
                                    selectedCategory === category.id ? categoryCSS.selectedTabText : null,
                                ]}
                            >
                                {category.name}
                            </Text>
                            {selectedCategory === category.id ? (
                                <View style={categoryCSS.underlineContainer}>
                                    <View style={categoryCSS.underline} />
                                </View>
                            ) : null}
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default CategoryTabs;
