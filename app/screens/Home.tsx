import { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { fetch } from "@react-native-community/netinfo";

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import Title from '../components/home/Title'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'
import { IUser } from '../interface/User'
import { IGame } from '../interface/Game'

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories, amountOptions, amountQuestions, isAdd } = useContext<IUser>(UserContext)
  const { gameAction, dispatch } = useContext<IGame>(GameContext)

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  const handleChangeView = () => {
    setIsChangeView(!isChangeView)
  }

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isConnection && isAdd && <Banner />
      }
      <Title />
      <Menu navigation={navigation} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} gameAction={gameAction!}
        isConnection={isConnection} handleChangeView={handleChangeView} dispatch={dispatch} />
    </View>
  )
}

export default Home