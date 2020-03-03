import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Board from "@/components/Board";
import Square from "@/components/Square";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Board.vue", () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        player1Name: "X",
        player2Name: "O"
      }
    });
    wrapper = mount(Board, { store, localVue });
    vm = wrapper.vm;
  });

  it("should render a Board with 9 squares", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be possible to play on an empty square when game is not over", async () => {
    // Given
    const squares = wrapper.findAll(Square);

    // When
    squares.at(0).trigger("click");

    // Then
    expect(vm.squares[0]).toBe("X");
    expect(vm.player).toBe("O");
  });

  it("should not be possible to play on a non empty square when game is not over", async () => {
    // Given
    vm.squares = ["X", "O", "X", null, null, null, null, null, null];
    vm.player = "O";
    await vm.$nextTick();

    const squares = wrapper.findAll(Square);

    // When
    squares.at(2).trigger("click");

    // Then
    expect(vm.squares[2]).toBe("X");
    expect(vm.player).toBe("O");
  });

  it("should not be possible to play when game has a winner", async () => {
    // Given
    vm.squares = ["X", "X", "X", "O", "O", null, null, null, null];
    vm.player = "O";
    await vm.$nextTick();

    const squares = wrapper.findAll(Square);

    // When
    squares.at(5).trigger("click");

    // Then
    expect(vm.squares[5]).toBe(null);
    expect(vm.player).toBe("O");
  });

  it("should display the next player when game is not over", async () => {
    // Given
    const squares = wrapper.findAll(Square);

    // When
    squares.at(0).trigger("click");
    squares.at(1).trigger("click");
    squares.at(2).trigger("click");
    await vm.$nextTick();

    // Then
    const status = wrapper.find(".game__status > span");
    expect(status.text()).toBe("Next player is O");
  });

  it("should display the winner", async () => {
    // Given
    vm.squares = ["O", "O", "O", "X", "X", null, null, null, null];
    await vm.$nextTick();

    // Then
    const status = wrapper.find(".game__status > span");
    expect(status.text()).toBe("Winner is O");
  });

  it("should display when game is a draw", async () => {
    // Given
    vm.squares = ["X", "O", "X", "O", "X", "X", "O", "X", "O"];
    await vm.$nextTick();

    // Then
    const status = wrapper.find(".game__status > span");
    expect(status.text()).toBe("That's a draw");
  });
});
