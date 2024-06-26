import { View } from 'react-native'

import ButtonFinish from './ButtonFinish'

import { playingStyles } from '../../../../styles/playing.styles'

import { ActionsFinishPropsType } from '../../../../types/props.types'

const ActionsFinish = ({ areErrors, continueHome, showErrors }: ActionsFinishPropsType) => {
  return (
    <View style={[playingStyles.containerActionsFinish, {
      justifyContent: areErrors ? 'space-evenly' : 'center'
    }]}>
      {
        areErrors &&
        <ButtonFinish text='REPASAR ERRORES' func={showErrors} disabled={false} />
      }
      <ButtonFinish text='CONTINUAR' func={continueHome} disabled={false} />
    </View>
  )
}

export default ActionsFinish