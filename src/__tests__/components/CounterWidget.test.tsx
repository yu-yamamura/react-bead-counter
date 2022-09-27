import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterWidget from "../../components/CounterWidget";

describe("initialization", () => {
  describe("if the initial count is omitted", () => {
    it("should display 0 as the count and no beads", () => {
      render(<CounterWidget />);

      expect(screen.getByTestId("count")).toHaveTextContent("0");
      expect(screen.queryAllByTestId("bead")).toEqual([]);
    });
  });

  describe("if the initial count is specified as 1", () => {
    it("should display 1 as the count and a sing bead", () => {
      render(<CounterWidget initialCount={1} />);

      expect(screen.getByTestId("count")).toHaveTextContent("1");
      expect(screen.queryAllByTestId("bead")).toHaveLength(1);
    });
  });
});

describe("buttons", () => {
  describe("if the button labeled with '-1' is clicked", () => {
    it("should display the count decremented by 1 and the same number of beads", () => {
      render(<CounterWidget />);
      const count = screen.getByTestId("count");

      expect(count).toHaveTextContent("0");
      expect(screen.queryAllByAltText("bead")).toHaveLength(0);

      userEvent.click(screen.getByTestId("decrement"));

      expect(count).toHaveTextContent("-1");
      expect(screen.queryAllByAltText("bead")).toHaveLength(0);
    });
  });

  describe("if the button labeled with '+1' is clicked", () => {
    it("should display the count incremented by 1 and the same number of beads", () => {
      render(<CounterWidget />);
      const count = screen.getByTestId("count");

      expect(count).toHaveTextContent("0");
      expect(screen.queryAllByTestId("bead")).toHaveLength(0);

      userEvent.click(screen.getByTestId("increment"));

      expect(count).toHaveTextContent("1");
      expect(screen.queryAllByTestId("bead")).toHaveLength(1);
    });
  });

  describe("if the button labeled with '+10' is clicked", () => {
    it("should display the count incremented by 10 and the same number of beads", () => {
      render(<CounterWidget />);
      const count = screen.getByTestId("count");

      expect(count).toHaveTextContent("0");
      expect(screen.queryAllByTestId("bead")).toHaveLength(0);

      userEvent.click(screen.getByTestId("add"));

      expect(count).toHaveTextContent("10");
      expect(screen.queryAllByTestId("bead")).toHaveLength(10);
    });
  });

  describe("if all the buttons are clicked one by one", () => {
    it("should display the count and the number of beads correctly", () => {
      render(<CounterWidget initialCount={3} />);
      const count = screen.getByTestId("count");

      expect(count).toHaveTextContent("3");
      expect(screen.queryAllByTestId("bead")).toHaveLength(3);

      userEvent.click(screen.getByTestId("increment"));
      expect(count).toHaveTextContent("4");
      expect(screen.queryAllByTestId("bead")).toHaveLength(4);

      userEvent.click(screen.getByTestId("decrement"));
      expect(count).toHaveTextContent("3");
      expect(screen.queryAllByTestId("bead")).toHaveLength(3);

      userEvent.click(screen.getByTestId("add"));
      expect(count).toHaveTextContent("13");
      expect(screen.queryAllByTestId("bead")).toHaveLength(13);
    });
  });
});
