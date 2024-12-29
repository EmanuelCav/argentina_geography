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
        backgroundColor: pressed ? '#32b2c2' : '#00ACC1',
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
        color={"#028696"}
      />
    </Pressable>
  )
}

export default Category