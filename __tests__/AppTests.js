import React from "react";
import renderer from 'react-test-renderer';
import App from "@/App";
import { fireEvent, screen, render } from "@testing-library/react-native";
import { shallow } from "enzyme";
import { Button } from "react-native";

jest.useFakeTimers()

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});




