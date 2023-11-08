import { View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'

import styles from './DropdownComp.style'

const DropdownComponent = ({data, setDifficultyData, difficultyData}) => {
  return (
    <View style={styles.container}>
        <Dropdown style={styles.dropdown}
        valueField="value"
        labelField="label"
        value={difficultyData}
        onChange={(item) => {
          setDifficultyData(item.value);
        }}
        data={data}
        />
    </View>
  )
}

export default DropdownComponent