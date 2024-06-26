import { Text, Pressable, Dimensions, View } from 'react-native'
import Checkbox from 'expo-checkbox'

import { categoriesStyle } from '../../../styles/categories.styles'

import { CategoryPropsType } from '../../../types/props.types'

import { selectCategory } from '../../../helper/category'

const Category = ({ category, categories, categoryAction }: CategoryPropsType) => {

  const changeCategory = () => {
    const newCategories = selectCategory(categories, category)
    categoryAction!(newCategories)
  }

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#5cc197' : '#5dc1b9',
      },
      categoriesStyle.containerCategory
    ]} onPress={changeCategory}>
      <View style={{ width: '94%' }}>
        <Text style={categoriesStyle.categoryText}>{category.category}</Text>
      </View>
      <Checkbox
        value={category.isSelect}
        style={{ padding: Dimensions.get("window").height / 92.5 }}
        onValueChange={changeCategory}
      />
    </Pressable>
  )
}

export default Category