import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import CustomText from '../../components/CustomText'
import Nav from '../../components/Nav'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchingCult = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const List = [
        { tag: '가족생활문화', image: require('../../assets/images/search/cake.png'), title: '아기의 탄생, 백일과 돌', desc: `한국에서는 아기가 태어난 지 백일이 되는 날을 기념해요. 백일에는 백설기와 수수경단, 미역국을 준비하고 깨끗한 새 옷을 입혀 축하해줍니다. 돌은 아기가 태어난 지 1년이 되는 첫 생일로, 친척 및 친지들을 초대해 돌잔치를 열어요. 돌에 하는 특별한 의식으로는 돌잡이(아기가 무엇을 잡는지 봄)가 있어요.` },
        { tag: '식생활', image: require('../../assets/images/search/eat_rice.png'), title: '한국인의 밥상', desc: `‘밥 먹었어?’라는 말로 인사를 건넬 정도로 한국인들에게 밥은 음식 이상의 의미를 가져요. 친해지고 싶은 한국인이 있다면 함께 식사를 해보면 어떨까요? 한국인은 주로 밥을 중심으로 반찬이나 국물 요리와 함께 먹어요. 한국의 밥은 동남아시아 지역 밥보다 찰져서, 처음에는 소화가 안 되거나 배탈이 날 수도 있어요. 일주일 정도 노력하면 한국 밥에 익숙해 질 거예요.` },
        { tag: '주거생활', image: require('../../assets/images/search/home_ung.png'), title: '집을 빌리는 계약, 전세', desc: `주택 소유자에게 보증금을 낸 뒤, 일정 기간 동안 그 집에 거주하는 한국만의 독특한 임대 방식입니다. 계약 기간이 끝나면 보증금 전액을 다시 돌려 받아요.  보증금은 통상 주택 가격의 40~80%선으로,보통 2년 단위(오피스텔은 1년)로 계약해요. 집주인은 마음대로 2년 이내에 계약을 파기할 수 없어요.` },
        { tag: '소비경제생활', image: require('../../assets/images/search/tel_img.png'), title: '보이스 피싱을 주의하세요!', desc: `보이스 피싱이란 주로 전화나 문자로 고객들에게 허위 사실을 보내 예금이나 현금을 송금하도록 하여 돈을 빼앗는 사기 행위를 말해요. 자녀 납치, 거짓 사고, 지인 사칭, 금감원 명의의 허위긴급공지 문자메시지, 텔레뱅킹 사기, 수사 기관 사칭, 신용카드정보 획득을 통한 사기 등이 있어요. (금융감독원 국번없이 1332)` },
        { tag: '교통수단', image: require('../../assets/images/search/bus_img.png'), title: '지하철, 생각보다 간단해요!', desc: `수도권에는 9개의 지하철과 그외의 노선이 있어요. 노선별로 다른 색상의 서울 지하철은 서울의 가장 변두리와 위성 도시 그리고 모든 곳을 가로지르는 많은 환승역이 기호로 표시되어 있어요. 일반적으로 지하철은 아침, 저녁 교통 체증 시간에는 2~3분 간격이고 그 외 시간에는 4~6분 간격입니다. 일반적인 가격은 1,250원이고 환승이 가능해요.` },
        { tag: '교육제도', image: require('../../assets/images/search/school_img.png'), title: '다문화 학생을 위한 교육', desc: `한국어학급(찾아가는 한국어교육)에서는 한국어 능력이 부족한 학생들의 한국어교육을 위하여 유·초·중·고등학교에 한국어학급을 개설하여 한국어와 한국문화 교육을 지원해요. 다문화학생 대학생 멘토링에서는 대학생과 1:1 매칭하여 학교적응과 기초학습을 지원해요. 대학교 또는 지역아동센터를 통해 신청하여 참여할 수 있어요.` },
        { tag: '건강과 의료', image: require('../../assets/images/search/hospital_img.png'), title: '몸도 마음도 건강하게!', desc: `보건소는 지역주민의 건강을 증진하고 질병을 예방·관리하기 위하여 설치한 공공보건기관입니다. 일반 행정 서비스와 의료 서비스가 제공돼요. 정신건강복지센터는 정신질환의 예방 및 정신질환자의 발견·상담·재활서비스 제공, 사례관리, 정신건강에 대한 교육·홍보 등의 업무를 수행하는 공공보건기관입니다. 무료로 이용이 가능해요.` },
        { tag: '취업과 근로', image: require('../../assets/images/search/notebook_img.png'), title: '일자리는 어떻게 찾나요?', desc: `외국인은 입국 목적에 따라, 발급받은 비자 유형에 따라 취업할 수도 있다. 결혼이민자(F-6) 비자를 받고 입국한 결혼이민자는 법적으로 취업을 할 수 있는 자격이 허용되어요 취업을 위해서는 일자리 알선기관을 방문하거나 서울글로벌센터(global.seoul.go.kr), 워크넷(www.work.go.kr)과 같은 인터넷 사이트를 통해 정보를 얻을 수 있어요.` },
    ]

    const imageSources = [
        require('../../assets/images/search/family.png'),
        require('../../assets/images/search/eat.png'),
        require('../../assets/images/search/home.png'),
        require('../../assets/images/search/coin.png'),
        require('../../assets/images/search/bus.png'),
        require('../../assets/images/search/book.png'),
        require('../../assets/images/search/pill.png'),
        require('../../assets/images/search/work.png')
    ];

    const imageSourcesClick = [
        require('../../assets/images/search/family_click.png'),
        require('../../assets/images/search/eat_click.png'),
        require('../../assets/images/search/home_click.png'),
        require('../../assets/images/search/coin_click.png'),
        require('../../assets/images/search/bus_click.png'),
        require('../../assets/images/search/book_click.png'),
        require('../../assets/images/search/pill_click.png'),
        require('../../assets/images/search/work.png')
    ];

    return (
        <>
            <View style={styles.search_wrap}>
                <CustomText style={styles.title}>문화탐구</CustomText>
                <ScrollView
                    style={styles.search_scroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    {imageSources.map((source, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
                            <View style={styles.box}>
                                <Image
                                    source={selectedIndex === index ? imageSourcesClick[index] : source}
                                    style={styles.boxImage}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                {selectedIndex !== null && (
                    <View style={styles.info_wrap}>
                        <View style={styles.tage_wrap}>
                            <CustomText style={styles.tage_text}>{List[selectedIndex].tag}</CustomText>
                            <Image style={styles.tage_img} source={require('../../assets/images/search/tage.png')} />
                        </View>
                        <View style={styles.info}>
                            <Image style={styles.info_img} source={List[selectedIndex].image} />
                            <CustomText style={styles.info_title}>{List[selectedIndex].title}</CustomText>
                            <CustomText style={styles.desc}>{List[selectedIndex].desc}</CustomText>
                        </View>
                    </View>
                )}
            </View>
            <Nav />
        </>
    )
}

export default SearchingCult

const styles = StyleSheet.create({
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
        paddingRight: 60
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