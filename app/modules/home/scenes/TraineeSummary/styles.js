import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F2833"
    },

    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
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

    infoText:{
        padding: 20,
        color: color.white,
        margin: 20,
        backgroundColor: "#2c3847",
        borderRadius: 5
    },

    txt:{
        color: color.white,
        textAlign: "justify",
        marginTop: 10
    },

    titleTxt: {
        fontSize: fontSize.regular + 4,
        fontFamily: fontFamily.bold,
        textAlign: "center",
        color: "#f0f0f0",
        marginTop: 10
    }
});

export default styles;
