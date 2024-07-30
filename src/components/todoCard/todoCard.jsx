import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./todoCard.style";


const todoCard = ({ todo, onToggleTodo, onDeleteTodo }) => {
    return (
        <TouchableOpacity
      onPress={() => onToggleTodo(todo.id)}
      onLongPress={() => onDeleteTodo(todo.id)}
    >
      <View style={[styles.container, todo.completed && styles.completedContainer]}>
        <Text style={[styles.text, todo.completed && styles.completedText]}>
          {todo.task}
        </Text>
      </View>
    </TouchableOpacity>
    )
}



export default todoCard;