import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    pokeImage: { width: 50, height: 50 },
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
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        zIndex: 1,
    }
})

export default styles