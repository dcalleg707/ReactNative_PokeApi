import { getPokemonData } from "@utils";
import * as mockPokemon from "./mock/mockPokemon.json";
import * as mockPokemonWithoutImage from "./mock/mockPokemonWithoutImage.json";

describe('getPokemonData', () => {
    it('works correctly', () => {
        pokemonData = getPokemonData(mockPokemon);
        expect(Object.keys(pokemonData).length).toBe(7);
    });
    it('defines main image as empty when not defined', () => {
        pokemonData = getPokemonData(mockPokemonWithoutImage);
        expect(pokemonData.imageUrl).toBe("");
    });
});