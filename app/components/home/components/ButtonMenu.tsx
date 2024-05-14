import { Text, Pressable } from 'react-native'

import { ButtonMenuPropsType } from '../../../types/props.types'

import { homeStyles } from '../../../styles/home.styles'

const ButtonMenu = ({ text, func, disabled }: ButtonMenuPropsType) => {
  return (
    <Pressable onPress={func} style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#5cc197' : disabled ? '#dddddd' : '#5dc1b9',
      },
      homeStyles.buttonMenu]} disabled={disabled}>
      <Text style={homeStyles.buttonMenuText}>{text}</Text>
    </Pressable >
  )
}

export default ButtonMenu