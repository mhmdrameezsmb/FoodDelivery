import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const SplashScreen = () =>{
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Splash!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        },
    });

    export default SplashScreen;
