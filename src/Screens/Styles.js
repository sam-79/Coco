
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    card: {
        margin: 5,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20


    },
    cardImg: {
        borderRadius: 10,
        width: 100,
        height: 100,

    },
    userName: {
        marginHorizontal: 20,
        color: '#000',
        fontSize: 15,
        fontWeight: 500
    },
    profileSection: {
        alignItems: 'center'
    },
    profileImg: {
        borderRadius: 50,
        width: 100,
        height: 100
    },

})
export default styles