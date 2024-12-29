import { Text, Pressable } from 'react-native'

import { categoriesStyle } from '../../../styles/categories.styles'

import { ActionCategoryPropsType } from '../../../types/props.types'

const ActionCategory = ({ text, changeAllCategory, isSelect }: ActionCategoryPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
        {
            backgroundColor: pressed ? '#32b2c2' : '#00ACC1'
        },
        categoriesStyle.buttonActionCategory
    ]} onPress={() => changeAllCategory(isSelect)}>
        <Text style={categoriesStyle.textButtonActionCategory}>{text}</Text>
    </Pressable>
  )
}

export default ActionCategory