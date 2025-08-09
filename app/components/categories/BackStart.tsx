import { Dimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

import { categoriesStyle } from '../../styles/categories.styles'

const BackStart = ({ back }: { back: () => void }) => {
    return (
        <View style={categoriesStyle.backContainer}>
            <Icon
                name="caretleft"
                color='#00ACC1'
                size={Dimensions.get("window").height / 34}
                style={{ marginLeft: Dimensions.get("window").width / 45 }}
                onPress={back}
            />
        </View>
    )
}

export default BackStart