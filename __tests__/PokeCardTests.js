import PokeCard from "@components/PokeCard";
import React from "react";
import renderer from "react-test-renderer";
import { getPokemonData } from "@utils";
import * as mockPokemon from "./mock/mockPokemon.json";
import { fireEvent, screen, render } from "@testing-library/react-native";


pokemonData = getPokemonData(mockPokemon);

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<PokeCard pokeData={pokemonData} />).toJSON();
        expect(tree.children.length).toBe(3);
    });
});

test('Sets the new select pokemon on click', () => {
    const mockFn = jest.fn();
    render(<PokeCard pokeData={pokemonData} setSelectedPokemon={mockFn} />);
    fireEvent.press(screen.getByText("#" + pokemonData.id));
    expect(mockFn).toHaveBeenCalledWith(pokemonData);
}
);