import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ListCard from './ListCard';
import { DATA } from '../data';


const ImgCardList = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={(card) =>
                    <ListCard
                        data={card.item}
                    />
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default ImgCardList;
