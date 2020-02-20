import { mount } from "@vue/test-utils";
import Board from "@/components/Board";

describe("Board.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Board);
  });

  it("should render a Board with 9 squares", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
