import React, { useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, View, Button, ShadowPropTypesIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ResponseScreen = (props) => {

    const handleOK = () => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {props.route.params.infected ?
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStartedText}>Danke für deine Solidarität!</Text>
                        <Text style={{ fontSize: 50, textAlign: "center" }}>🙅🥇👏</Text>

                        <Button title={"Okay!"} onPress={handleOK} color='#297373'></Button>
                        <Text style={styles.developmentModeText}>
                            Vielen Dank, dass du deine letzten Standorte mit anderen geteilt hast! Bitte befolge nun die Anweisung offizieller Behörden. Gute Besserung!
                            </Text>
                    </View> :
                    props.route.params.contact ?
                        <View style={styles.getStartedContainer}>
                            <Text style={styles.getStartedText}>
                                Möglicher Kontakt mit dem Virus!
</Text>
                            <Text style={{ fontSize: 50, textAlign: "center" }}>💩🧐🏡</Text>
                            <Button title={"Okay!"} onPress={handleOK} color='#297373'></Button>
                            <Text style={styles.developmentModeText}>
                                Du hast dich in einem bestimmten Zeitfenster am selben Standort aufgehalten wie eine infizierte Person. Dieses Ergebnis basiert auf den uns vorliegenden Daten. Dies ersetzt keinen richtigen Test. Solltest du keine Beschwerden entwickeln, besteht auch kein Anlass sich testen zu lassen.
                            </Text>
                        </View>
                        :
                        <View style={styles.getStartedContainer}>
                            <Text style={styles.getStartedText}>Kein Kontakt zum Virus!</Text>
                            <Text style={{ fontSize: 50, textAlign: "center" }}>👍🌈🏡</Text>
                            <Button title={"Okay!"} onPress={handleOK} color='#297373'></Button>
                            <Text style={styles.developmentModeText}>
                                Du hattest bisher keinen Kontakt zum Virus. Dieses Ergebnis basiert auf den uns vorliegenden Daten. Solltest du dennoch Beschwerden haben oder entwickeln, solltest du dennoch deinen Hausarzt kontaktieren.
                            </Text>
                        </View>
                }
            </ScrollView>
        </View>
    );
}

ResponseScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEE73',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
        height: '90%'
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        marginHorizontal: 50,
        marginVertical: 50
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#297373',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

export default ResponseScreen;
