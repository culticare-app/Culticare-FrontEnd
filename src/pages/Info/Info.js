import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import Nav from '../../components/Nav'

const InfoHeader = ({ tabnow }) => {
    return (
        <View style={headers.header}>
            <CustomText style={headers.title}>{tabnow}</CustomText>
            <TouchableOpacity style={headers.mark}>
                <Image source={require('../../assets/images/info/bookmark.png')} />
            </TouchableOpacity>
        </View>
    );
};

const InfoTab = ({ tabnow, setTabnow }) => {
    return (
        <View style={tabs.tabs_wrap}>
            <TouchableOpacity onPress={() => { setTabnow('정보 조회') }} style={tabnow === '정보 조회' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '정보 조회' ? tabs.textclick : tabs.text}>자료</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabnow('지원센터') }} style={tabnow === '지원센터' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '지원센터' ? tabs.textclick : tabs.text}>지원센터</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabnow('채용 공고') }} style={tabnow === '채용 공고' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '채용 공고' ? tabs.textclick : tabs.text}>채용 공고</CustomText>
            </TouchableOpacity>
        </View>
    );
};

const InfoSearch = () => {
    return (
        <View style={searchs.search}>
            <Image style={searchs.searchimg} source={require('../../assets/images/info/search.png')} />
            <TextInput style={searchs.searchinput} placeholder="검색" />
        </View>
    );
};

const InfoList = ({ setClick }) => {
    return (
        <ScrollView style={lists.list_wrap}>
            <CustomText style={lists.listtitle}>최신 자료</CustomText>
            <View style={lists.listbox}>
                <TouchableOpacity style={lists.list} onPress={() => { setClick(true) }}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={lists.list}>
                    <CustomText style={lists.text}>[고용노동부] 온열질환예방OPS(OnePageSheet)...</CustomText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// 팝업 컴포넌트에 애니메이션 추가
const InfoPop = ({ setClick }) => {
    const [yesmark, setYesMark] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current; // 시작 위치

    useEffect(() => {
        // 팝업이 화면에 나타날 때 슬라이드 애니메이션 시작
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    const closePopUp = () => {
        // 팝업이 닫힐 때 슬라이드 애니메이션
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setClick(false)); // 애니메이션 종료 후 클릭 상태를 false로 설정
    };

    return (
        <View style={pops.background}>
            <Animated.View style={[pops.pop_wrap, { transform: [{ translateY: slideAnim }] }]}>
                <View style={pops.box}>
                    <TouchableOpacity onPress={closePopUp}><Text>버튼</Text></TouchableOpacity>
                    <CustomText style={pops.title}>[고용노동부] 온열질환예방OPS(OnePageSheet) 17개 외국어</CustomText>
                    <CustomText style={pops.content}>
                        📢고용노동부에서 배포한여름철 폭염 온열질환 예방 가이드 안내입니다.온열질환 예방 가이드 17개 외국어 번역본을 제공하오니, 외국인 근로자에 대해 온열질환 예방 3대 예방수칙 및 폭염단계별 대응요령을 확인 가능하도록 현장에 게시하여주시기 바랍니다.
                        출처 : 고용노동부
                    </CustomText>
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

// 다른 팝업 컴포넌트들도 동일한 방식으로 애니메이션 적용 가능
const CenterPop = ({ setClick }) => {
    const [yesmark, setYesMark] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    const closePopUp = () => {
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setClick(false));
    };

    return (
        <View style={pops.background}>
            <Animated.View style={[pops.pop_wrap, { transform: [{ translateY: slideAnim }] }]}>
                <View style={pops.box}>
                    <TouchableOpacity onPress={closePopUp}><Text>버튼</Text></TouchableOpacity>
                    <CustomText style={pops.title}>[고용노동부] 온열질환예방OPS(OnePageSheet) 17개 외국어</CustomText>
                    <CustomText style={pops.content}>
                        📢고용노동부에서 배포한여름철 폭염 온열질환 예방 가이드 안내입니다.온열질환 예방 가이드 17개 외국어 번역본을 제공하오니, 외국인 근로자에 대해 온열질환 예방 3대 예방수칙 및 폭염단계별 대응요령을 확인 가능하도록 현장에 게시하여주시기 바랍니다.
                        출처 : 고용노동부
                    </CustomText>
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const EmployPop = ({ setClick }) => {
    const [yesmark, setYesMark] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    const closePopUp = () => {
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setClick(false));
    };

    return (
        <View style={pops.background}>
            <Animated.View style={[pops.pop_wrap, { transform: [{ translateY: slideAnim }] }]}>
                <View style={pops.box}>
                    <TouchableOpacity onPress={closePopUp}><Text>버튼</Text></TouchableOpacity>
                    <CustomText style={pops.title}>[고용노동부] 온열질환예방OPS(OnePageSheet) 17개 외국어</CustomText>
                    <CustomText style={pops.content}>
                        📢고용노동부에서 배포한여름철 폭염 온열질환 예방 가이드 안내입니다.온열질환 예방 가이드 17개 외국어 번역본을 제공하오니, 외국인 근로자에 대해 온열질환 예방 3대 예방수칙 및 폭염단계별 대응요령을 확인 가능하도록 현장에 게시하여주시기 바랍니다.
                        출처 : 고용노동부
                    </CustomText>
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}


const PageNation = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5;

    const handlePagePress = (page) => {
        setCurrentPage(page);
    };

    return (
        <View style={pages.container}>
            <TouchableOpacity
                onPress={() => handlePagePress(currentPage > 1 ? currentPage - 1 : 1)}
                style={pages.arrow}
            >
                <Image source={require('../../assets/images/info/pageback.png')} />
            </TouchableOpacity>

            {Array.from({ length: totalPages }, (_, index) => (
                <TouchableOpacity
                    key={index + 1}
                    onPress={() => handlePagePress(index + 1)}
                    style={[
                        pages.pageNumber,
                        currentPage === index + 1 && pages.currentPage
                    ]}
                >
                    <CustomText style={[
                        pages.pageText,
                        currentPage === index + 1 && pages.currentPageText
                    ]}>
                        {index + 1}
                    </CustomText>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                onPress={() => handlePagePress(currentPage < totalPages ? currentPage + 1 : totalPages)}
                style={pages.arrow}
            >
                <Image source={require('../../assets/images/info/pagenext.png')} />
            </TouchableOpacity>
        </View>
    );
};

const Info = () => {
    const [click, setClick] = React.useState(true)
    const [tabnow, setTabnow] = React.useState('지원센터')

    return (
        <>
            <ScrollView style={styles.Info_wrap}>
                <InfoHeader tabnow={tabnow} />
                <InfoTab tabnow={tabnow} setTabnow={setTabnow} />
                <InfoSearch />
                <InfoList setClick={setClick} />
                <PageNation />
            </ScrollView>
            {click && tabnow === '정보 조회' ? (
                <InfoPop setClick={setClick} />
            ) : (
                <>
                    {click && tabnow === '지원센터' ? (
                        <CenterPop setClick={setClick} />
                    ) : (
                        <>
                            {click && tabnow === '채용 공고' ? (
                                <EmployPop setClick={setClick} />
                            ) : null}
                        </>
                    )}
                </>
            )}
            <Nav />
        </>
    );
};

export default Info;

const styles = StyleSheet.create({
    Info_wrap: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
    }
});

const headers = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }
});

const tabs = StyleSheet.create({
    tabs_wrap: {
        flexDirection: 'row',
        borderRadius: 8,
        width: 335,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#F5F5F5',
        width: 111,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnclick: {
        width: 111,
        backgroundColor: '#303030',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#A0A0A0',
        fontSize: 16,
    },
    textclick: {
        color: '#fff',
        fontSize: 16,
    }
});

const searchs = StyleSheet.create({
    search: {
        flexDirection: 'row',
        width: 335,
        height: 40,
        alignItems: 'center',
        borderBottomColor: '#C5C5C5',
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 20,
    },
    searchimg: {
        marginRight: 5,
        marginBottom: 5,
    },
    searchinput: {
        fontSize: 16,
    }
});

const lists = StyleSheet.create({
    list_wrap: {
        height: 355,
    },
    listtitle: {
        fontSize: 16,
        color: '#A0A0A0',
        fontFamily: 'Pretendard-Bold',
    },
    list: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        justifyContent: 'center',
        fontFamily: 'Pretendard-Medium',
    },
    text: {
        color: '#000',
        fontSize: 15.5,
    }
});

const pops = StyleSheet.create({
    background: {
        zIndex: 10,
        backgroundColor: '#000000B8',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        height: '100%',
        justifyContent: 'flex-end',
    },
    pop_wrap: {
        zIndex: 11,
        width: '100%',
        height: 500,
        backgroundColor: '#fff',
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        paddingTop: 40,
        position: 'relative',
    },
    title: {
        paddingBottom: 15,
        borderBottomColor: '#303030',
        borderBottomWidth: 1,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Pretendard-Medium',
    },
    content: {
        paddingTop: 15,
        fontSize: 16,
        color: '#000',
        lineHeight: 22,
    },
    btnbox: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 60,
    },
    btn: {
        flexDirection: 'row',
        width: 132,
        height: 40,
        borderColor: '#303030',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    btnclick: {
        flexDirection: 'row',
        width: 132,
        height: 40,
        backgroundColor: '#303030',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    btnimg: {
        width: 14,
        height: 18,
        marginRight: 8,
    },
    btntext: {
        fontSize: 14,
        color: '#303030',
    },
    btntextclick: {
        fontSize: 14,
        color: '#fff',
    }
});

const pages = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    arrow: {
        padding: 10,
    },
    arrowText: {
        fontSize: 12,
    },
    pageNumber: {
        width: 21,
        height: 21,
        marginHorizontal: 5,
        borderRadius: 500,
        paddingRight: 1,
        paddingBottom: 1,
    },
    currentPage: {
        backgroundColor: '#000',
    },
    pageText: {
        fontSize: 16,
        textAlign: 'center',
    },
    currentPageText: {
        color: '#fff',
    },
});
