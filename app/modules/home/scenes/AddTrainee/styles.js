import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F2833"
    },

    tabbar:{
        backgroundColor: "#2c3847",
        margin: 0,
        padding: 0
    },

    buttonTextTabBar:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.regular,
        color: color.white
    },

    buttonTabBar:{
        backgroundColor: "#2c3847",
        borderWidth: 0,
        borderRadius: 0
    },

    infoText:{
        padding: 20,
        color: color.white,
        margin: 20,
        backgroundColor: "#2c3847",
        borderRadius: 5
    },

    txt:{
        color: color.white,
        textAlign: "justify"
    },

    containerView:{
        marginVertical: 20
    },

    button:{
      backgroundColor: "#0B0C10"
    },

    buttonText:{
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },
});

export default styles;
