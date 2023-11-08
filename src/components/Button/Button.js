import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './Button.style'

const Button = ({onPress, title}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default Button