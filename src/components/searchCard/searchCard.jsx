import React from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './searchCard.style';

const searchCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Yapılacakları giriniz..."
          placeholderTextColor={'#BDBDBD'}
          style={styles.todoInput}
        />
        <View style={styles.seperator}></View>
        <View style={styles.saveButton}>
          <Button
            title="Kaydet"
            color={'white'}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default searchCard;
