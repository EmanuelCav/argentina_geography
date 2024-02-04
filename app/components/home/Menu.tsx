import { View } from 'react-native'

import allQuestions from '../../../assets/questions.json'

import { homeStyles } from '../../styles/home.styles'

import { MenuPropsType } from '../../types/props.types'

import ButtonMenu from './components/ButtonMenu'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, gameAction }: MenuPropsType) => {

  const start = () => {
    if (categories.filter(c => c.isSelect).length === 0) {
      navigation.navigate('Categories', {
        isPlaying: true
      })
      
      return
    }
    
    gameAction!(allQuestions, categories, amountQuestions, amountOptions, navigation)
  }

  const category = () => {
    navigation.navigate('Categories', {
      isPlaying: false
    })
  }

  const options = () => {
    navigation.navigate('Options')
  }

  const statistics = () => {
    navigation.navigate('Statistics')
  }

  return (
    <View style={homeStyles.containerMenu}>
      <ButtonMenu text='INICIAR' func={start} />
      <ButtonMenu text='CATEGORÍAS' func={category} />
      <ButtonMenu text='OPCIONES' func={options} />
      <ButtonMenu text='ESTADÍSTICAS' func={statistics} />
    </View>
  )
}

export default Menu