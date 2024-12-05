import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import categoryCSS from './css/CategoryTabCSS'

const categories = [
    { id: 1, name: 'Destaques' },
    { id: 2, name: 'Mundo' },
    { id: 3, name: 'Economia' },
    { id: 4, name: 'Ciência' },
    { id: 5, name: 'Política' },
    { id: 6, name: 'Esportes' },
];

const CategoryTabs = () => {
    const [selectedCategory, setSelectedCategory] = useState(1); // Estado para a aba selecionada

    const handlePress = (id: number) => {
        setSelectedCategory(id);
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
