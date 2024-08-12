import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-svg'
import CustomText from '../../components/CustomText'
import Nav from '../../components/Nav'

const SearchingCult = () => {
    return (
        <>
            <View style={style.search_wrap}>
                <CustomText style={style.title}>문화탐구</CustomText>
                <ScrollView
                    style={style.search_scroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    <View style={style.box}><Image source={require('../../assets/images/search/family.png')} /></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                    <View style={style.box}></View>
                </ScrollView>
                <View style={style.info_wrap}>
                    <View style={style.tage_wrap}>
                        <CustomText style={style.tage_text}>가족생활문화</CustomText>
                        <Image style={style.tage_img} source={require('../../assets/images/search/tage.png')} />
                    </View>
                    <View style={style.info}>
                        <Image style={style.info_img} source={require('../../assets/images/search/cake.png')} />
                        <CustomText style={style.info_title}>아기의 탄생, 백일과 돌</CustomText>
                        <CustomText style={style.desc}>
                            {`한국에서는 아기가 태어난 지 백일이 되는 날을 기념해요. 백일에는 백설기와 수수경단, 미역국을 준비하고 깨끗한 새 옷을 입혀 축하해줍니다. 
                            
 돌은 아기가 태어난 지 1년이 되는 첫 생일로, 친척 및 친지들을 초대해 돌잔치를 열어요. 돌에 하는 특별한 의식으로는 돌잡이(아기가 무엇을 잡는지 봄)가 있어요.`}
                        </CustomText>
                    </View>
                </View>
            </View>
            <Nav />
        </>
    )
}

export default SearchingCult

const style = StyleSheet.create({
    search_wrap: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        padding: 20,
        fontSize: 20,
        color: '#000',
        textAlign: 'left',
        fontFamily: 'Pretendard-Bold'
    },
    search_scroll: {
        paddingHorizontal: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        height: 64,
        flexGrow: 0,
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 500,
        marginRight: 10,
        backgroundColor: '#F5F5F5'
    },
    info_wrap: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tage_wrap: {
        position: 'relative',
        width: 300,
        height: 32,
        paddingTop: 10,
        paddingLeft: 15
    },
    tage_text: {
        textAlign: 'left',
        fontSize: 14,
        color: '#9199DD',
        zIndex: 1,
        fontFamily: 'Pretendard-SemiBold'
    },
    tage_img: {
        position: 'absolute',
        zIndex: 0,
        left: 0
    },
    info: {
        width: 300,
        height: 432,
        backgroundColor: '#303030',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info_img: {
        marginBottom: 20
    },
    info_title: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Pretendard-SemiBold',
        marginBottom: 10
    },
    desc: {
        flexShrink: 1,
        fontSize: 14,
        color: '#fff',
        lineHeight: 20
    }
})