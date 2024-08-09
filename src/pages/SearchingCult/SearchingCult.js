import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Text } from 'react-native-svg'

const SearchingCult = () => {
    return (
        <View>
            <Text>문화탐구</Text>
            <ScrollView>
                <View><Image source={require('../../assets/images/search/family.png')}/></View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
            </ScrollView>
        </View>
    )
}

export default SearchingCult