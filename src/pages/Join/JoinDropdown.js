import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: '베트남', value: '베트남' },
    { label: '이탈리아', value: '이탈리아' },
    { label: '일본', value: '일본' },
    { label: '러시아', value: '러시아' },
];

const DropdownComponent = ({ onChangeCountry }) => {
    const [value, setValue] = React.useState('');
    const [isFocus, setIsFocus] = React.useState(false);

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '모국 선택' : '...'}
                searchPlaceholder="검색"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    onChangeCountry(item.value)
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        width: 224,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        borderWidth: 2,
        borderColor: '#ECECEC',
        paddingTop: 9
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 14,
    },
    placeholderStyle: {
        fontFamily: 'Pretendard-Regular',
        color: '#303030',
        fontSize: 14,
    },
    selectedTextStyle: {
        fontFamily: 'Pretendard-Regular',
        color: '#303030',
        fontSize: 15,
    },
    iconStyle: {
        width: 25,
        height: 20,
        marginTop: 4
    },
    inputSearchStyle: {
        fontFamily: 'Pretendard-Regular',
        color: '#303030',
        height: 40,
        fontSize: 15,
    },
});