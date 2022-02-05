import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";
import "./Checkbox.css";

test("print hello world to the user", () => {
    render(<Checkbox/>);

    const element = screen.getByTestId("checkbox");
    expect(element).toMatchSnapshot();
})
test("changement du classname au click", () => {
    render(<Checkbox/>);

    const element = screen.getByTestId("checkbox");
    expect(element).toBeInTheDocument();
    userEvent.click(element);
    expect(element).toHaveClass("indicator");
})