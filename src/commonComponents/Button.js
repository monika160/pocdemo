import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { colors, CommonSize, fonts } from '../utils/utility';


const Button = (props) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                onPress={() => props.onSubmit()}
                style={styles.btnView}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export { Button }

const styles = StyleSheet.create({
    mainView: {
        position: 'absolute',
        bottom: CommonSize.height_5,
        alignItems: 'center',
        width: Dimensions.get('screen').width - CommonSize.width_30,
        height: CommonSize.height_40
    },
    btnView: {
        width: Dimensions.get('screen').width - CommonSize.width_30,
        height: CommonSize.height_40,
        borderRadius: CommonSize.font_5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.THEME_LIGHT,
        elevation: CommonSize.font_5
    }, text: {
        fontSize: CommonSize.font_12,
        fontFamily: fonts.Oxanium_SemiBold,
        color: colors.WHITE
    }
})
