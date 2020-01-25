import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Header from "./components/Header";
import PlayersCards from "./components/PlayersCards";

it("renders without crashing", () => {
  render (<Header />, <PlayersCards />, <App />);
});

it("does the header's title render", () => {
  const { findByText } = render(<Header />);
  findByText(/Women's World Cup Players/i);
});

it("does the mode button render", () => {
  const { getByTestId } = render(<Header />);
  getByTestId("button");
});