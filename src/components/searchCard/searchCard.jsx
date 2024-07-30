import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './searchCard.style';

const SearchCard = ({onAddTodo}) => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleAddTodo = () => {
    if (inputText.trim()) {
      onAddTodo(inputText);
      setInputText('');
      setError('');
    } else {
      setError('Yapılacaklar boş olamaz');
    }
  };

  useEffect(() => {
    setIsEmpty(inputText.trim() === '');
  }, [inputText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Yapılacakları giriniz..."
          placeholderTextColor={'#BDBDBD'}
          style={styles.todoInput}
          value={inputText}
          onChangeText={setInputText}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.seperator}></View>
        <View>
          <TouchableOpacity
            style={[styles.saveButton, isEmpty && styles.saveButtonPassive]}
            onPress={handleAddTodo}
            >
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchCard;
