import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#37474f',
    borderRadius: 15,
    padding: 10,
  },
  innerContainer: {
    padding: 15,
  },
  todoInput:{
    borderRadius:10,
    color: 'white',
    fontSize: 16,
  },
  saveButton: {
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonPassive:{
    backgroundColor: '#BDBDBD'
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  seperator:{
    height: 1,
    backgroundColor: '#78909c',
    marginVertical: 10,
  }
});
