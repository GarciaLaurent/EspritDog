import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';

const ImageValidation = (props) => {
    return (
        <View style={{flex: 1}}>
            <Image
                source={{uri: `data:image/jpeg;base64,${props.route.params.picture.base64}`}}
                style={{height: "80%", width: '100%'}}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.touchable, {backgroundColor: 'red'}]}
                    onPress={() => props.navigation.pop()}
                >
                    <Text style={styles.text}>
                        X
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchable, {backgroundColor: 'green'}]}
                    onPress={()=>{
                        props.navigation.navigate('RecapImage',{picture:props.route.params.picture.base64})
                    }}
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
