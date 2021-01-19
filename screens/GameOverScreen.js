import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <TitleText>The Game Is Over!</TitleText>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
            {/* <Image fadeDuration={1000} source={{uri: 'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg'}}/> */}
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed {' '}
                <Text style={styles.highlight}>{props.userNumber} </Text> 
                rounds to guess the number {' '}
                <Text style={styles.highlight}>{props.roundsNumber}</Text>
            </BodyText>
        </View>
        <MainButton onPress={props.onRestart}> NEW GAME </MainButton>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
       marginHorizontal: 30,
       marginVertical: 15
    }
});

export default GameOverScreen;