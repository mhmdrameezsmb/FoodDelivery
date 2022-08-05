import React from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Colors, Fonts,General} from '../constants';
import { WelcomeCard } from '../components';
import { Display } from '../utils';

const Pagination =()=>{
    return (
    <View style={styles.pageContainer}>
            <View   style={styles.page} > </View>
            <View   style={styles.page} > </View>
            <View   style={styles.page} > </View>
            <View   style={styles.page} > </View>
        </View>
}



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
        pagingEnabled={true}
        overScrollMode="never"
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
  welcomeListContainer: {
    height: Display.setHeight(60)
  },
  titleText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 25,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  pageContainer: {
  flexDirection:'row',
   },
  page: {
    height:8,
    width:15,
    backgroundColor:Colors.DEFAULT_GREEN,
    borderRadius:32,
  },
});

export default WelcomeScreen;
