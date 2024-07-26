import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import SearchCard from './components/searchCard';
import TodoCard from './components/todoCard';
import todo_data from './todos.json'

const App = () => {
  const [todos, setTodos] = useState(todo_data);
  const renderTodos = ({item}) => <TodoCard todo={item} />;
  const ItemSeparator = () => <View style={styles.seperator}/>;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Yapılacaklar</Text>
          <Text style={styles.header}>{todos.length}</Text>
        </View>
        <FlatList
        keyExtractor={item => item.id.toString()}
        data={todo_data}
        renderItem={renderTodos}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
        /> 
        <SearchCard />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    color: '#ffa500',
    fontWeight: 'bold',
    fontSize: 40,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  seperator: {
    height: 10,
  }
});
