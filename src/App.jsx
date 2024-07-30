import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import SearchCard from './components/searchCard';
import TodoCard from './components/todoCard';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addTodo = (task) => {
    const newTodo = {
      id: idCounter,
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setIdCounter(idCounter + 1);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderTodos = ({item}) => (
    <TodoCard todo={item} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
  );
  const ItemSeparator = () => <View style={styles.seperator} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Yapılacaklar</Text>
          <Text style={styles.header}>{todos.length}</Text>
        </View>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={renderTodos}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
        <SearchCard onAddTodo={addTodo} />
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
  },
});
