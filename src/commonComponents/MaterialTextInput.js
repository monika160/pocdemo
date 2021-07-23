import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { CommonSize, colors, fonts } from '../utils/utility';

const MaterialTextInput = props => (
    <View style={[styles.container, props.style]}>
        <TextInput
            style={[styles.textInput, styles.bottomBorder,
            {
                fontSize: CommonSize.font_12,
                marginVertical: CommonSize.height_5
            }]}
            onFocus={props.onFocus}
            label={props.label}
            value={props.value}
            onChangeText={props.onChangeText}
            error={!props.valid}
            mode='outlined'
            editable={props.editable}
            autoFocus={props.autoFocus}
            secureTextEntry={props.secureTextEntry}
            numberOfLines={props.numberOfLines}
            onBlur={props.onBlur}
            keyboardType={props.keyboardType}
            textContentType={props.textContentType}
            maxLength={props.maxLength}
            autoCapitalize={props.autoCapitalize}
            placeholder={props.placeholder}
            theme={{
                colors: {
                    placeholder: colors.DIM_LINE_GRAY,
                    primary: colors.THEME_LIGHT,
                    text: colors.textGrey
                }
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: '100%',
        backgroundColor: colors.WHITE
    },
    textInput: {
        width: '100%',
        backgroundColor: colors.WHITE,
        fontSize: CommonSize.font_12,
        fontFamily: fonts.Oxanium_Medium
    },
    bottomBorder: {
        borderBottomWidth: 0,
        borderBottomColor: 'white',
    },

});

export { MaterialTextInput }