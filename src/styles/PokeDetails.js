import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    pokeImage: {
        width: 90,
        height: 90
    },
    pokeSprite: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 200,
        margin: 1,
    },
    cardContainer: {
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    closeDetails: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "#b366ff",
        paddingHorizontal: 5,
        zIndex: 1,
    },
    title: {
        fontWeight: "bold"
    },
    detailsContainer: {
        backgroundColor: "#cc99ff",
        padding: 10,
    },
})

export default styles