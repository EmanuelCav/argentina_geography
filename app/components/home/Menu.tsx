import { View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import { StackNavigation } from '../../types/props.types'

import ButtonMenu from './components/ButtonMenu'

const Menu = ({ navigation }: { navigation: StackNavigation }) => {

  const start = () => {
    navigation.navigate('Playing')
  }

  const categories = () => {
    navigation.navigate('Categories')
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
        <ButtonMenu text='CATEGORÍAS' func={categories} />
        <ButtonMenu text='OPCIONES' func={options} />
        <ButtonMenu text='ESTADÍSTICAS' func={statistics} />
    </View>
  )
}

export default Menu