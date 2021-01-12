import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import ImgCard from './ImgCard'
import { DATA } from '../data';

const ImgCardList = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <ImgCard
                        data={item}
                    />
                }
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />
        </SafeAreaView>
    )
}

export default ImgCardList;
