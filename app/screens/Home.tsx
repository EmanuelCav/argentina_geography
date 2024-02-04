import { useContext } from 'react'
import { View } from 'react-native'

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

  const { categories, amountOptions, amountQuestions } = useContext<IUser>(UserContext)
  const { gameAction } = useContext<IGame>(GameContext)

  return (
    <View style={generalStyles.containerGeneral}>
        <Title />
        <Menu navigation={navigation} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} gameAction={gameAction!} />
        <Banner />
    </View>
  )
}

export default Home