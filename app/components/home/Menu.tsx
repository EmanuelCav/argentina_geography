import { View } from 'react-native'
import { useEffect, useState } from 'react'

import allQuestions from '../../../assets/questions.json'

import { homeStyles } from '../../styles/home.styles'

import { MenuPropsType } from '../../types/props.types'

import ButtonMenu from './components/ButtonMenu'

import { LOADING } from '../../server/constants/game.const'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, gameAction, handleChangeView, isConnection, dispatch }: MenuPropsType) => {

  const [isStart, setIsStart] = useState<boolean>(false)

  const start = () => {

    if (isConnection) {
      if (categories.filter(c => c.isSelect).length === 0) {
        navigation.navigate('Categories', {
          isPlaying: true
        })

        handleChangeView()

        return
      }
    } else {
      if (categories.filter(c => !c.isImage).filter(c => c.isSelect).length === 0) {
        navigation.navigate('Categories', {
          isPlaying: true
        })

        handleChangeView()

        return
      }
    }

    dispatch({
      type: LOADING,
      payload: true
    })

    setIsStart(true)
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

  const tent = () => {
    handleChangeView()

    navigation.navigate('Tent')
  }

  useEffect(() => {
    if (isStart) {
      setIsStart(false)
      gameAction!(allQuestions, isConnection ? categories : categories.filter(c => !c.isImage), amountQuestions, amountOptions, navigation, isConnection)
      return
    }

    dispatch({
      type: LOADING,
      payload: false
    })
  }, [isStart])

  return (
    <View style={homeStyles.containerMenu}>
      <ButtonMenu text='INICIAR' func={start} disabled={false} />
      <ButtonMenu text='CATEGORÍAS' func={category} disabled={false} />
      <ButtonMenu text='OPCIONES' func={options} disabled={false} />
      <ButtonMenu text='ESTADÍSTICAS' func={statistics} disabled={false} />
      <ButtonMenu text='TIENDA' func={tent} disabled={false} />
    </View>
  )
}

export default Menu