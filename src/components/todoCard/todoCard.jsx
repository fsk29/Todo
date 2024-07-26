import React from "react";
import { Text, View } from "react-native";
import { styles } from "./todoCard.style";


const todoCard = ({ todo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{todo.task}</Text>
        </View>
    )
}



export default todoCard;