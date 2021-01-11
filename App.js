import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';

// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
    };

    let content = <StartGameScreen onStartGame={startGameHandler}/>;

    if(userNumber) {
      content = <GameScreen userChoice={userNumber}/>;
    }
    
    return (
      <View style={styles.screen}>
        <Header title="Guess a Number"/>
        {content}
      </View>
    );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
