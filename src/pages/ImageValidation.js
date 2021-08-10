import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';

const ImageValidation = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.touchable, {backgroundColor: 'red'}]}
                >
                    <Text style={styles.text}>
                        X
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchable, {backgroundColor: 'green'}]}
                >
                    <Text style={styles.text}>
                        V
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    touchable: {
        backgroundColor: colors.secondary,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center'

    }
}
export default ImageValidation;
