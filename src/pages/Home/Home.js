import { View, Text, Image} from 'react-native'
import React, {useState} from 'react'

import Button from '../../components/Button/Button'
import DropdownComponent from '../../components/Dropdown/DropdownComp'

import styles from './Home.styles'


const Home = ({navigation}) => {
  const difficulty = [    
    { label: 'easy', value: 'easy' },
    { label: 'medium', value: 'medium' },
    { label: 'hard', value: 'hard' }]
    const [difficultyData, setDifficultyData] = useState()
    const amount = 10

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY='}} />
      <DropdownComponent data={difficulty} 
      setDifficultyData={setDifficultyData} 
      difficultyData={difficultyData}/>
      <Button title='START' onPress={() => navigation.navigate('Quiz', {difficultyData, amount})} />
    </View>
  )
}

export default Home