import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GloalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]); //1
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]); //2 is better
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      {/* <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GloalItem/>}>
      </FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

