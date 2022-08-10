import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ pokeData, setSelectedPokemon }) => {

    const types = pokeData.types?.reduce((prev, cur) => prev + " " + cur, "")
    const moves = pokeData.moves?.reduce((prev, cur) => prev + " " + cur, "")

    return (
        <View style={styles.detailsContainer}>
            <TouchableOpacity style={styles.closeDetails} onPress={() => setSelectedPokemon(null)}>
                <Text>x</Text>
            </TouchableOpacity>
            <View style={styles.cardContainer} >
                <Image
                    source={{ uri: pokeData.imageUrl }}
                    style={styles.pokeImage}
                />
                <Text >#{pokeData.id}</Text>
                <Text >{pokeData?.name}</Text>
            </View>
            <Text>Types</Text>
            <Text>{types}</Text>
            <Text>Peso</Text>
            <Text>{pokeData.weight}</Text>
            <Text>Movimientos</Text>
            <Text>{moves}</Text>
        </View>


    )
}

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

