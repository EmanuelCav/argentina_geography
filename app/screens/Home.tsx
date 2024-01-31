import { View } from 'react-native'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import Title from '../components/home/Title'

import { generalStyles } from '../styles/general.styles'

const Home = () => {
  return (
    <View style={generalStyles.containerGeneral}>
        <Title />
        <Menu />
        <Banner />
    </View>
  )
}

export default Home