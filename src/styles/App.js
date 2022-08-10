import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: "90%",
        alignSelf: "center",
        padding: 10,
        backgroundColor: "lightgray",
    },
    buttonsContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    pokemonGrid: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    detailsContainer: {
        width: "30%",
        marginRight: "10%",
    },
});

export default styles;
