import React, { Component } from 'react';
import { Text, View, Stylesheet, Platform, StatusBar, Dimensions, SafeAreaView, droidSafeArea } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PostCard from "./PostCard"

export default class Feed extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("./logo.png")}
                            style={styles.iconImage}
                            ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Flatlist>
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    </Flatlist>
                </View>
            </View>
        )
    }
}
const styles=Stylesheet.create({
    container:{
        flex:1,
        backgroundColor: "black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? statusbar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection: "row",
    },
    appIcon:{
        flex:0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage:{
        width: "100%",
        height: "100%",
        resizeMode:"contain",
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center",
    },
    appTitleText:{
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
})