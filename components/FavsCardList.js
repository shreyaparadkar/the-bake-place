import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { DATA } from '../data';
import FavsCard from './FavsCard';


const FavsCardList = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                numColumns={2}
                renderItem={(card) =>
                    <FavsCard data={card.item}
                    />
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default FavsCardList;
