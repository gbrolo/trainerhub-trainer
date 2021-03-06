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

    traineeList: {
        margin: 20,
        backgroundColor: "#2c3847"
    },

    traineeListTitle: {
        color: color.white
    },

    traineeListOverrideBorder: {
        borderColor: "#2c3847",
        borderRadius: 5,
        borderWidth: 0
    }
});

export default styles;
