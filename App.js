import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { POKEMON_API_URL } from '@env';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '@components/PokeCard';
import PokeDetails from '@components/PokeDetails';
import { getPokemonData } from '@utils';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [search, setSearch] = useState('');

  const changePokemons = async (url) => {
    if (!url) return;
    axios.get(url)
      .then(res => {
        setNext(res.data.next);
        setPrev(res.data.previous);
        return res.data.results
      })
      .then(results => Promise.all(results.map(result => axios.get(result.url))))
      .then(allData => allData.map(pokeData => getPokemonData(pokeData.data)))
      .then(filteredData => setPokemon(filteredData))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    changePokemons(`${POKEMON_API_URL}pokemon/?limit=4`)
  }, [setPokemon, setNext, setPrev])

  const pokeCards = pokemon.map((item, index) =>
    <PokeCard pokeData={item} setSelectedPokemon={setSelectedPokemon} key={index} />
  )

  return (
    <View style={styles.container}>
      <Text>Listado Pokemón</Text>
      <View style={styles.pokemonGrid}>
        <View style={selectedPokemon ? styles.cardsContainerSmall : null}>
          <TextInput style={styles.searchBar} placeholder="Buscar Pokemón" />
          <View style={styles.cardsContainer}>
            {pokeCards}
          </View>
        </View>
        {selectedPokemon ?
          <View style={styles.detailsContainer}>
            <PokeDetails pokeData={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
          </View>
          : null}

      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => changePokemons(prev)}
          title="previous"
          color="#4290f5"
        />
        <Button
          onPress={() => changePokemons(next)}
          title="next"
          color="#4290f5"
        />
      </View>
    </View>
  );
}

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
