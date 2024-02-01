import { View } from 'react-native'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import Title from '../components/home/Title'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'

const Home = ({ navigation }: { navigation: StackNavigation }) => {
  return (
    <View style={generalStyles.containerGeneral}>
        <Title />
        <Menu navigation={navigation} />
        <Banner />
    </View>
  )
}

export default Home