import Checkbox from "@components/Checkbox";
import { render, screen } from "@testing-library/react";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    render(<Checkbox onChange={() => {}} label="test" />);
  });
});
