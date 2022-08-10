import { Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';
import { POKEMON_API_URL } from '@env';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '@components/PokeCard';
import PokeDetails from '@components/PokeDetails';
import { getPokemonData } from '@utils';
import styles from '@styles/App';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [search, setSearch] = useState('');

  const changePokemons = url => {
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

  const searchPokemon = pokemonName => {
    pokemonName = pokemonName.toLowerCase();
    axios.get(`${POKEMON_API_URL}/pokemon/${pokemonName}`)
      .then(res => getPokemonData(res.data))
      .then(pokeData => setSelectedPokemon(pokeData))
      .catch(err => {
        if (err.response.status === 404) {
          Alert.alert('Pokemon no encontrado', 'El pokemon que buscas no existe')
          setSearch('')
        }
      })
  }

  useEffect(() => {
    changePokemons(`${POKEMON_API_URL}pokemon/?limit=4`)
  }, [setPokemon, setNext, setPrev])

  const pokeCards = pokemon.map((item, index) =>
    <PokeCard pokeData={item} setSelectedPokemon={setSelectedPokemon} key={index} />
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Listado Pokemón</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar Pokemon"
          value={search}
          onChangeText={text => setSearch(text)}
          onEndEditing={() => searchPokemon(search)} />
        <View style={styles.pokemonGrid}>
          <View style={[styles.cardsWrapper, selectedPokemon ? styles.cardsContainerSmall : null]}>
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
            color="#ff0000"
          />
          <Button
            onPress={() => changePokemons(next)}
            title="next"
            color="#ff0000"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
