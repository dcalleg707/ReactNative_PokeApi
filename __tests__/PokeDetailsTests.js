import PokeDetails from "@components/PokeDetails";
import React from "react";
import renderer from "react-test-renderer";
import { getPokemonData } from "@utils";
import * as mockPokemon from "./mock/mockPokemon.json";
import { fireEvent, screen, render } from "@testing-library/react-native";

pokemonData = getPokemonData(mockPokemon);

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<PokeDetails pokeData={pokemonData} />).toJSON();
        expect(tree.children.length).toBe(10);
    });
});

test('Resets selectedPokemon when close button is pressed', () => {
    const mockFn = jest.fn();
    render(<PokeDetails pokeData={pokemonData} setSelectedPokemon={mockFn} />);
    fireEvent.press(screen.getByText("x"));
    expect(mockFn).toHaveBeenCalledWith(null);
}
);