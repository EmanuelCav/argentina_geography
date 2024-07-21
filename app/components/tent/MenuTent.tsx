import { Alert, View } from 'react-native'
import { openBrowserAsync } from "expo-web-browser";

import ElementTent from './components/ElementTent'

import { ITent } from '../../interface/User'

import { tentStyle } from '../../styles/tent.styles';

import { handleIntegrationMP } from '../../utils/integration'

const MenuTent = ({ elements }: { elements: ITent[] }) => {

    const handleTent = async (tent: ITent) => {

        try {

            const data = await handleIntegrationMP(tent)

            await openBrowserAsync(data)

        } catch (error) {
            Alert.alert('Error', 'Hubo un error en el proceso de pago');
        }

    }

    return (
        <View style={tentStyle.containerMenuTent}>
            {
                elements.map((element: ITent, index: number) => {
                    return <ElementTent handleTent={handleTent} element={element} key={index} />
                })
            }
        </View>
    )
}

export default MenuTent