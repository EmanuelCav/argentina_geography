import { View } from 'react-native'

import allQuestions from '../../../assets/questions.json'

import { homeStyles } from '../../styles/home.styles'

import { MenuPropsType } from '../../types/props.types'

import ButtonMenu from './components/ButtonMenu'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, gameAction, handleChangeView, isConnection }: MenuPropsType) => {

  const start = () => {
    if (categories.filter(c => c.isSelect).length === 0) {
      navigation.navigate('Categories', {
        isPlaying: true
      })

      handleChangeView()
      
      return
    }
    
    gameAction!(allQuestions, categories, amountQuestions, amountOptions, navigation, isConnection)
  }

  const category = () => {
    handleChangeView()

    navigation.navigate('Categories', {
      isPlaying: false
    })
  }

  const options = () => {
    handleChangeView()

    navigation.navigate('Options')
  }

  const statistics = () => {
    handleChangeView()

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