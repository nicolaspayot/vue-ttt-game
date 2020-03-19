# Let's play Tic Tac Toe with Vue.js 🤓

[![Netlify Status](https://api.netlify.com/api/v1/badges/430d318b-b0b2-41e3-96d8-ac56dc5e2b8e/deploy-status)](https://app.netlify.com/sites/vue-ttt-game/deploys)

Final result is visible here: https://vue-ttt-game.netlify.com/#/

## Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= 12.16.1
- yarn >= 1.22.0
- [Visual Studio Code](https://code.visualstudio.com/) with the [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Recent version of Google Chrome with the [Vue.js devtools extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Install

```bash
yarn install
```

## Usage

```bash
yarn serve
```

## Run unit tests

```bash
yarn test:unit
```

## 🧑‍🏫 Rules

- The game is played on a grid that's **3 squares by 3 squares**.
- The first player is **X**, the second player is **O** (both players are human).
- The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
- When all 9 squares are full, the game is over.

## 👉 Step 0

- Clone the repository on your computer: `git clone https://github.com/nicolaspayot/vue-ttt-game.git`
- Install the dependencies: `yarn install`
- Start the development server: `yarn serve`
- Go to http://localhost:8080 and open the devtools 👀

## 👉 Step 1

> The square logic

### Goal

Display an **X** when the player **X** clicks on an empty square, and display an **O** when the player **O** clicks on an empty square.

### How-to

- Inspect `Board.vue` component in the Vue.js devtools and add some "X" and "O" to the `squares` data, see how the view automatically updates.
- Refactor the `Board` component template to use a `v-for` loop instead of 9 hard coded squares.
- To handle the logic of a square, create a `Square.vue` component with the following template:

```html
<div class="game__box">
  <span>{{ value }}</span>
</div>
```

- The `Square` component should contain a prop `value` and emits an event called `"click"` when the user clicks on `<div class="game__box">`.
- The `Board` component should now use the `Square` component, pass the value of each square and react to the click events.
- A click event should update the value of the given square ("X" or "O") and update the `player`. Use `this.$set(array, index, value)` so that `squares` updates reflect on the view.

## 👉 Step 2

> The game status

### Goal

Display **X** and **O** with different colors, display the game status (next player, winner or draw game).

### How-to

- In the `Square` component, on the root tag, dynamically add the classes `game__box--x` when `value` is "X" and `game__box--o` when `value` is "O".
- Create a `Status.vue` component with the following template:

```html
<template>
  <div class="game__status">
    <span>Next player is X</span>
  </div>
</template>
```

- The `Status` component should contain 3 props:

  - `winner: String`
  - `player: String`
  - `isDRawGame: Boolean`

- Use these props in the template to display:
  - "Winner is X" (or "Winner is O") if there's a winner.
  - "That's a draw game" if there's a draw game.
  - "Next player is X" (or "Next player is O") if the game is still in progress
- Use the `Status` component in the `Board` component just bellow the root tag : `<div class="game">` and pass the required props.
- The `player` prop is the current player. `winner` and `isDrawGame` are 2 computed that you should implement.
  - A function to find the winner is provided in `src/utils/winner.js`.

## 👉 Step 3

> Highlight the winner

### Goal

Improve the UI by highlighting the winner row and disabling the hover and click animations on empty squares when the game is over.

### How-to

- In the `Square` component, add 2 props:

  - `isGameOver: Boolean`
  - `isWinner: Boolean`

- Then, dynamically add the classes `game__box--over` when the game is over and `game__box--winner` when the square is in a winning combination.
- In `Board` component, create a new computed `isGameOver` that returns `true` when there's a winner or there's a draw game. Also, create a method `isSquareWinner` that returns true if the given square position is included in the winner positions.
- Finally, pass the computed and the method call as props to the `Square` component.

## 👉 Step 4

> Restart the game

### Goal

Improve the UX (User eXperience) by allowing users to restart the game without reloading the whole application.

### How-to

- Create a `Restart.vue` component with the following template:

```html
<template>
  <div class="game__action">
    <button>Restart game</button>
  </div>
</template>
```

- This component should emit an event called `"click"` when the user clicks on the button.
- In the `Board` component template, add the `Restart` component **on the last position inside** the `<div class="game">` tag.
- Add a method `restartGame` that will **reset** the game on the click event of the `Restart` component.

## 👉 Step 5 (advanced workshop)

> Routing and shared state

### Goal

Add a lobby page before starting the game. In this lobby, you shall be able to name the players.

### How-to

#### The `Lobby.vue` component

- Create a new component `Lobby.vue` that should allow you to set two player names. Use the following template:

```html
<form class="lobby">
  <div>
    <label>Player 1</label>
    <input type="text" placeholder="Name for player 1" />
  </div>
  <div>
    <label>Player 2</label>
    <input type="text" placeholder="Name for player 2" />
  </div>

  <div class="lobby__action">
    <button type="submit">Start the game</button>
  </div>
</form>
```

- The button "Start the game" should launch the game using the Vue navigation mechanism.

#### Configure Vue-Router

- Add the dependency `vue-router` to your package.json with the command `yarn add vue-router`.
- Configure two paths for your app, one for the `Lobby` component and the other one to your `Board` component.
- Change `App.vue` to hold routing logic.
- The app should now point by default to the Lobby component and the restart button should also bring you back to the Lobby.

#### Configure VueX

- Add the dependency `vuex` to your package.json with the command `yarn add vuex`.
- Add player names to the Vuex store to share these data across your components.
- The `Status` component can now retrieve player names from the store.

## 👉 Step 6 (bonus)

> Unit Tests

### Goal

Add unit tests to make sure that the game meets all expectations and to prevent breaking changes.

### How-to

#### The winner function

- Test the `winner` function by creating a spec file in `/tests/unit/utils/winner.spec.js` with the following content:

```JavaScript
import winner from "@/utils/winner";
import winningCombinations from "../fixtures/winning-combinations";

describe("winner function", () => {
  it("should return no winner for empty squares", () => {
    // Given
    const squares = ...;

    // When
    const { player, positions } = winner(squares);

    // Then
    // Do expectations on player and positions
  });

  it("should return no winner for a draw game", () => {
    // Given
    const squares = ...;

    // When
    const { player, positions } = winner(squares);

    // Then
    // Do expectations on player and positions
  });

  it("should return X as a winner and the winning positions", () => {
    // Given
    winningCombinations.forEach(([squares, winningCombination]) => {
      //When
      const { player, positions } = winner(squares);

      // Then
      // Do expectations on player and positions
    });
  });
});
```

- To pass the tests, you need to:
  - Update `squares` value for 1st and 2nd tests.
  - Add expectations on `player` and `positions` for the all tests

#### The `Board.vue` component

- Add more tests for the `Board.vue` component by updating the spec file in `/tests/unit/components/Board.spec.js` with the following content:

```JavaScript
describe("Board.vue", () => {
  ...

  it("should be possible to play on an empty square when game is not over", () => {
    // TODO
  });

  it("should not be possible to play on a non empty square when game is not over", () => {
    // TODO
  });

  it("should not be possible to play when game has a winner", () => {
    // TODO
  });

  it("should display the next player when game is not over", () => {
    // TODO
  });

  it("should display the winner", () => {
    // TODO
  });

  it("should display when game is a draw", () => {
    // TODO
  });
});
```
