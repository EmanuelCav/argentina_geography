import { Text, Pressable, Dimensions, View } from 'react-native'
import Checkbox from 'expo-checkbox'

import { categoriesStyle } from '../../../styles/categories.styles'

import { CategoryPropsType } from '../../../types/props.types'

const Category = ({ category, categoryAction }: CategoryPropsType) => {

  const changeCategory = () => {
    categoryAction!(category.category)
  }

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#5cc197' : '#5dc1b9',
      },
      categoriesStyle.containerCategory
    ]} onPress={changeCategory}>
      <View style={{ flex: 1 }}>
        <Text style={categoriesStyle.categoryText}>{category.category}</Text>
      </View>
      <Checkbox
        value={category.isSelect}
        style={{ padding: Dimensions.get("window").height / 92.5 }}
        onValueChange={changeCategory}
        color={"#16877e"}
      />
    </Pressable>
  )
}

export default Category