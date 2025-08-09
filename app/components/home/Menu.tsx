import { View } from 'react-native'
import { useEffect, useState } from 'react'
import i18n from '../../../i18n';

import allQuestions from '../../../assets/questions.json'

import { homeStyles } from '../../styles/home.styles'

import { MenuPropsType } from '../../types/props.types'

import ButtonMenu from './components/ButtonMenu'

import { LOADING } from '../../server/constants/game.const'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, gameAction, handleChangeView, isConnection, dispatch, categoryAllAction }: MenuPropsType) => {

  const [isStart, setIsStart] = useState<boolean>(false)
  const [isFirstStart, setIsFirstStart] = useState<boolean>(false)

  const start = () => {

    if (!isFirstStart) {
      categoryAllAction(false)
      setIsFirstStart(true)

      navigation.navigate('Categories', {
        isPlaying: true
      })

      handleChangeView()

      return
    }

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

    if (!isFirstStart) {
      categoryAllAction(false)
      setIsFirstStart(true)
    }

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
      <ButtonMenu text={i18n.t("start")} func={start} disabled={false} />
      <ButtonMenu text={i18n.t("categories")} func={category} disabled={false} />
      <ButtonMenu text={i18n.t("options")} func={options} disabled={false} />
      <ButtonMenu text={i18n.t("statistics")} func={statistics} disabled={false} />
      <ButtonMenu text={i18n.t("tent")} func={tent} disabled={false} />
    </View>
  )
}

export default Menu