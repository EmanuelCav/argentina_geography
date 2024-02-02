import { useContext, useEffect } from 'react'
import { View } from 'react-native'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import Title from '../components/home/Title'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'

import { UserContext } from '../server/context/user.context'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useContext(UserContext)

  useEffect(() => {
    console.log(user);
    
  }, [])

  return (
    <View style={generalStyles.containerGeneral}>
        <Title />
        <Menu navigation={navigation} />
        <Banner />
    </View>
  )
}

export default Home