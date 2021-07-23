import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
} from 'react-native'
import { colors, CommonSize, fonts } from '../utils/utility';

const Product = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(props.data)
    }, [props.data]);

    const _renderItem = (item, index) => {
        return (
            <View
                key={item.key}
                style={styles.cardView}>
                <View style={styles.fRow}>
                    <View style={styles.imageView}>
                        <Image
                            resizeMode={"contain"}
                            source={item.product_img}
                            style={styles.image}
                        >
                        </Image>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between', flex: 1
                    }}>
                        <View>
                            <Text style={styles.itemText}>{item.product_name}</Text>
                            <Text style={styles.itemCompText}>{item.product_cat}</Text>
                            <Text style={styles.stranghtText}>{item.product_desc}</Text>
                        </View>
                       
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        // onEndReached={() =>  loadMore() }
        // onEndReachedThreshold={0.1}
        renderItem={({ item, index }) => _renderItem(item, index)} />
    )
}

export { Product }

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: CommonSize.width_10,
        marginTop: CommonSize.height_5,
        borderRadius: CommonSize.font_5,
        backgroundColor: colors.WHITE,
        elevation: CommonSize.font_1
    },
    fRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: CommonSize.height_10
    },
    imageView: {
        width: CommonSize.font_36,
        height: CommonSize.font_36,
        borderRadius: CommonSize.font_18,
        borderColor: colors.DIM_GRAY,
        borderWidth: CommonSize.font_2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: CommonSize.width_10
    },
    image: {
        width: CommonSize.font_18,
        height: CommonSize.font_18
    },
    mrpText: {
        color: colors.GREEN_COLOR,
        marginRight: CommonSize.width_10,
        fontFamily: fonts.Oxanium_SemiBold,
        fontSize: CommonSize.font_10
    },
    itemText: {
        color: colors.BLACK_COLOR,
        fontFamily: fonts.Oxanium_SemiBold,
        fontSize: CommonSize.font_10
    },
    itemCompText: {
        color: colors.BLACK_COLOR,
        fontFamily: fonts.Oxanium_Regular,
        fontSize: CommonSize.font_8,

    },
    stranghtText: {
        color: colors.redish,
        fontFamily: fonts.Oxanium_Medium,
        fontSize: CommonSize.font_10,
        marginTop: CommonSize.height_5
    }
})
