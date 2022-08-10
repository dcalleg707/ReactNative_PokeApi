import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        paddingHorizontal: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: "auto",
        width: "100%",
    },
    cardsContainerSmall: {
        width: "60%",
    },
    searchBar: {
        width: "60%",
        alignSelf: "baseline",
        padding: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 5,
    },
    buttonsContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    pokemonGrid: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%",
    },
    detailsContainer: {
        width: "35%",
    },
    mainTitle: {
        fontSize: 30,
        marginBottom: 20,
    },
});

export default styles;
