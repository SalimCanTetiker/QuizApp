import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import QuestionCard from '../../components/QuestionCard/QuestionCard'
import * as api from '../../api/api'
import Modal from '../../components/Modal/Modal'

import styles from './Quiz.style'

const Quiz = ({route, navigation}) => {
const {difficultyData, amount} = route.params
const [questionData, setQuestionData] = useState([])
const [score, setScore] = useState(0)
const [count, setCount] = useState(0)
const [modal, setModal] = useState(false)

useEffect(() => {
  const getData = async () => {
    const data = await api.fetchData(difficultyData, amount)
    setQuestionData(data)
  }
  getData()
},[])
  return (
    <View style={styles.container}>
      {
        modal ? <Modal score={score} onPress={() => navigation.navigate('Home')}/> :     
        <QuestionCard
        questionData={questionData}
        score={score}
        setScore={setScore}
        count={count}
        setCount={setCount}
        modal={modal}
        setModal={setModal}
        />
      }

    </View>
  )
}

export default Quiz