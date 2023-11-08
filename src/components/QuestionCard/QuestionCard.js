import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import styles from './QuestionCard.style'


const QuestionCard = ({questionData, score, setScore, count, setCount, modal, setModal}) => {

  const [timer, setTimer] = useState(30)

  const checkOption = (answer) => {
    if(answer == questionData[count]?.correct_answer) {
      setScore(score + 10)
    }
    setCount(count + 1)
    if(count == 9) {
      setModal(true)
    }
      setTimer(30)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if(timer > 0){
        setTimer(timer - 1)
      }
      if(timer == 0 && count < 10){
        setCount(count + 1)
        setTimer(30)
      }
      else if(count >= 10){
        setModal(true)
      }
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  },[timer])
  return (
    <View>
      <Text style={styles.timer}>{timer}</Text>
      <Text style={styles.question}>{count + 1}/10 - {questionData[count]?.question}</Text>
      {
        questionData[count]?.answers?.map((answer) => (
          <Pressable onPress={() => checkOption(answer)} style={({pressed}) => [
            pressed && {backgroundColor: 'black'}
          ]}>
            <Text style={styles.answer}>{answer}</Text>
          </Pressable>
        ))
      }
    </View>
  )
}

export default QuestionCard