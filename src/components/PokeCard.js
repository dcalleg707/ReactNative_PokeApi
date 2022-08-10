import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@styles/PokeCard";

export default ({ pokeData, setSelectedPokemon, color }) => {
    const colors = ["#ccffe6", "#ffccb3", "#ff8080", "#d9e6f2"]
    return (
        <TouchableOpacity style={[styles.cardContainer, { backgroundColor: colors[color] }]} onPress={() => setSelectedPokemon(pokeData)}>
            <Image
                source={{ uri: pokeData.imageUrl }}
                style={styles.pokeImage}
            />
            <Text >#{pokeData.id}</Text>
            <Text >{pokeData?.name}</Text>
        </TouchableOpacity>

    )
}
