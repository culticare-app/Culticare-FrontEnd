import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';

const CommSearch = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');

    const onChangeSearch = (text) => {
        setSearch(text);
    };

    return (
        <View style={styles.search_wrap}>
            <View style={styles.searchbox}>
                <View style={styles.box}>
                    <Image style={styles.searchimg} source={require('../../assets/images/comm/searchgray.png')} />
                    <TextInput
                        onChangeText={onChangeSearch}
                        value={search}
                        style={styles.searchinput}
                        placeholder='제목, 내용, 해시태그를 검색해보세요'
                    />
                </View>
                <TouchableOpacity style={styles.searchbtn} onPress={() => { navigation.navigate('Community') }}>
                    <CustomText style={styles.btnText}>취소</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CommSearch;

const styles = StyleSheet.create({
    search_wrap: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'top',
    },
    searchbox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'top', 
        flex: 1
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        width: 288,
        height: 40,
        borderRadius: 8,
        paddingLeft: 10,
    },
    searchimg: {
        width: 24,
        height: 24,
        marginRight: 5
    },
    searchinput: {
        flex: 1,
        paddingVertical: 0,
        fontSize: 14
    },
    searchbtn: {
        width: 47,
        height: 40,
        paddingBottom: 2,
        justifyContent: 'center'
    },
    btnText : {
        color: '#000',
        fontSize: 15,
        textAlign: 'center'
    }
});
