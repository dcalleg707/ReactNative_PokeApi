import React from "react";
import renderer from 'react-test-renderer';
import App from "@/App";
import { fireEvent, screen, render } from "@testing-library/react-native";
jest.useFakeTimers()

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(3);
    });
});

/*
test("Move to the next pokemon page", () => {
    render(<App />);
    fireEvent.press(screen.getByText("next"));
    expect(screen.getByText("charmander")).toBeTruthy();
}
);
*/

/*
test("searching a pokemon name shows it's description", () => {
    render(<App />);
    fireEvent.changeText(screen.getByPlaceholderText("Buscar Pokemon"), "pikachu");
    expect(screen.getByText("prev")).toBeTruthy();
}
);
*/


