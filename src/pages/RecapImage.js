import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../config/colors';
import {fonts} from '../config/fonts';

const RecapImage = (props) => {
    let meds = [
        {
            name: "Doliprane",
            quantity: 2,
            img:`https://cdn.shop-pharmacie.fr/images/doliprane-paracetamol-1000-mg-comprimes-effervescents-F10000168-p10.jpg`
        },
        {
            name: "Imodium",
            quantity: 1,
            img:"https://www.pharma-gdd.com/images/catalog/pictures/thumbnails/600/mc-neil-imodium-lingual-anti-diarrheique-12-lyophilisats-oraux-face.jpg"
        },
        {
            name: "Spasfon",
            quantity: 2,
            img:"https://resize2.prod.docfr.doc-media.fr/rcrop/642,346,center-middle/img/var/medicineguide/pictures/21520"
        },
        {
            name: "Doliprane",
            quantity: 2,
            img:`https://cdn.shop-pharmacie.fr/images/doliprane-paracetamol-1000-mg-comprimes-effervescents-F10000168-p10.jpg`
        },
        {
            name: "Imodium",
            quantity: 1,
            img:"https://www.pharma-gdd.com/images/catalog/pictures/thumbnails/600/mc-neil-imodium-lingual-anti-diarrheique-12-lyophilisats-oraux-face.jpg"
        },
        {
            name: "Spasfon",
            quantity: 2,
            img:"https://resize2.prod.docfr.doc-media.fr/rcrop/642,346,center-middle/img/var/medicineguide/pictures/21520"
        }
    ]
    let pharmacyOrder = {
        image: `data:image/jpeg;base64,${props.route.params.picture}`,
        meds: [
            {
                name: "Doliprane",
                quantity: 2
            },
            {
                name: "Imodium",
                quantity: 1
            },
            {
                name: "Spasfon",
                quantity: 2
            }
        ]
    };
    const renderMeds = () => {
        return meds.map((med, index)=>{
            return (
                <View key={index} style={styles.medContainer}>
                    <Image
                        source={{uri: med.img}}
                        style={{height: 120, width: 120}}/>
                    <Text style={{fontFamily:fonts.regularBold, fontSize:16}}>{med.name} X {med.quantity} </Text>
                    <Text></Text>
                </View>
            )
        })
    }
    return (
        <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
            <View style={{width:'100%', flexWrap:'wrap', flex:1, flexDirection:'row', justifyContent:'center'}}>
                {renderMeds()}
            </View>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text}>
                    Passer commande
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    medContainer: {
        backgroundColor:'#FFFFFF',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column',
        margin:"2.5%",
        height:200,
        width:'40%',
        borderRadius:5,
        shadowColor: '#000000',
        shadowOpacity:1,
        shadowRadius:5
    },
    touchable:{
        backgroundColor: colors.secondary,
        padding:12,
        width:'80%',
        alignItems: 'center',
        marginBottom:20,
        borderRadius:20
    },
    text:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:18
    },
    container:{
        alignItems:'center',
        justifyContent: 'space-evenly'
    }
})

export default RecapImage