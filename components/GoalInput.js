import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Modal} from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal); // we want to run this function as soon as it gets called so we have ()
      setEnteredGoal('')
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Legal Case" 
                style={styles.input}
                onChangeText={goalInputHandler}
            />
            <Button title="ADD" onPress={addGoalHandler}/>
            <Button  title="CANCEL" color="red" onPress={props.onCancel}/>
            {/* props.onAddGoal.bind(this, enteredGoal) */}
        </View>
      </Modal>
    );
}


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10,
    marginBottom: 10
  }
});

export default GoalInput;