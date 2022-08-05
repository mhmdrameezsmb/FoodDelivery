import React from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Colors, Fonts,General} from '../constants';
import { WelcomeCard } from '../components';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />

      <View style={styles.welcomeListContainer}>
        <FlatList 

        data={General.WELCOME_CONTENTS}
        keyExtractor={item  => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <WelcomeCard {...item} />}


        
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 25,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});

export default WelcomeScreen;
