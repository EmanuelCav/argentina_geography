import { View, Text } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import ButtonMenu from '../home/components/ButtonMenu'

const Finish = () => {
    return (
        <View style={playingStyles.containerPreFinish}>
            <View style={playingStyles.containPreFinish}>
                <Text style={playingStyles.textPreFinish}>Respuestas correctas: 10</Text>
                <Text style={playingStyles.textPreFinish}>Tiempo: 01:30</Text>
                <ButtonMenu text='REPASAR ERRORES' func={() => console.log("REPASAR ERRORES")} />
                <ButtonMenu text='ACEPTAR' func={() => console.log("ACEPTAR")} />
            </View>
        </View>
    )
}

export default Finish