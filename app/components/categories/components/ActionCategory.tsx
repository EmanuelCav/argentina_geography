import { Text, Pressable } from 'react-native'

import { categoriesStyle } from '../../../styles/categories.styles'

import { ActionCategoryPropsType } from '../../../types/props.types'

const ActionCategory = ({ text, changeAllCategory, isSelect }: ActionCategoryPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
        {
            backgroundColor: pressed ? '#5cc197' : '#5dc1b9'
        },
        categoriesStyle.buttonActionCategory
    ]} onPress={() => changeAllCategory(isSelect)}>
        <Text style={categoriesStyle.textButtonActionCategory}>{text}</Text>
    </Pressable>
  )
}

export default ActionCategory