import { useState } from "react";
import { Dimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { categoriesStyle } from '../../styles/categories.styles'

import { ICategory } from '../../interface/Game'
import { ShowCategoriesPropsType } from "../../types/props.types";

import Category from './components/Category'

const ShowCategories = ({ categories, categoryAction }: ShowCategoriesPropsType) => {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(8)

    const left = () => {
        if(min < 8) {
            return
        }
        setMin(min - 8)
        setMax(max - 8)
    }

    const rigth = () => {
        if(max > categories.length - 8) {
            return
        }
        setMin(min + 8)
        setMax(max + 8)
    }

    return (
        <View style={categoriesStyle.containerShowCategories}>
            <View style={categoriesStyle.containShowCategories}>
                {
                    categories.map((category: ICategory, index: number) => {
                        return <Category category={category} categoryAction={categoryAction} categories={categories} key={index} />
                    }).slice(min, max)
                }
            </View>
            <View style={categoriesStyle.containerActionCategories}>
                <Icon name="caretleft" color={min < 8 ? '#dddddd' : '#ffffff'} size={Dimensions.get("window").height / 41} onPress={left} />
                <Icon name="caretright" color={max > categories.length - 8 ? '#dddddd' : '#ffffff'} size={Dimensions.get("window").height / 41} onPress={rigth} />
            </View>
        </View>
    )
}

export default ShowCategories