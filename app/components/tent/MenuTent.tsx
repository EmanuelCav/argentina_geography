import { View } from 'react-native'
import { openBrowserAsync } from "expo-web-browser";

import ElementTent from './components/ElementTent'

import { ITent } from '../../interface/User'

import { tentStyle } from '../../styles/tent.styles';

import { handleIntegrationMP } from '../../utils/integration'

const MenuTent = ({ elements }: { elements: ITent[] }) => {

    const handleTent = async (tent: ITent) => {
        const data = await handleIntegrationMP(tent)
        if (!data) {
            return console.log("Ha ocurrido un error")
        }
        openBrowserAsync(data)
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