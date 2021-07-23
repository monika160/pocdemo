import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { colors } from '../utils/utility'
import { FormComponent } from '../commonComponents'

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {     
        }
    }

    onSubmit = (data) => {
        console.log('onsubmit == ', data)
    this.props.navigation.navigate('Dashboard')
    }

    render() {
        return (
            <View style={styles.mainView}>
            < FormComponent onSubmit={this.onSubmit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.DIM_GRAY,
        flex: 1,
    }
})