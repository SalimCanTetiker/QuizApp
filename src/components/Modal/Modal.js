import { View, Text } from 'react-native'
import React from 'react'

import Button from '../Button/Button'

import styles from './Modal.style'

const Modal = ({score, onPress}) => {
  return (
    <View>
      <Text style={styles.score}>SCORE: {score}</Text>
      <Button title={'RESTART'} onPress={onPress}/>
    </View>
  )
}

export default Modal