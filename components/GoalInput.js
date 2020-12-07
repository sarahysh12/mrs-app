import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Legal Case" 
                style={styles.input}
                onChangeText={goalInputHandler}
            />
            <Button title="ADD" onPress={props.onAddGoal}/>
        </View>
    );
}


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  }
});

export default GoalInput;