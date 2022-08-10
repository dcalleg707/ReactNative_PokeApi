import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ pokeData, setSelectedPokemon }) => {
    return (
        <TouchableOpacity style={Styles.cardContainer} onPress={() => setSelectedPokemon(pokeData)}>
            <Image
                source={{ uri: pokeData.imageUrl }}
                style={Styles.pokeImage}
            />
            <Text >#{pokeData.id}</Text>
            <Text >{pokeData?.name}</Text>
        </TouchableOpacity>

    )
}

const Styles = StyleSheet.create({
    pokeImage: { width: 50, height: 50 },
    cardContainer: {
        width: "50%",
        textAlign: "center",
        alignItems: "center",
    },
})

