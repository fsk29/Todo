import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7da453',
    borderRadius: 10,
    padding: 10,
  },
  completedContainer: {
    backgroundColor: '#37474f'
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#BDBDBD',
  },
});
