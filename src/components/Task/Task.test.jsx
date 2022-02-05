import { render, screen } from "@testing-library/react";
import Task from "./Task.jsx";

test("print hello world to the user", () => {
    render(<Task/>);

    const hello = screen.getByText("Todo");
    expect(hello).toBeInTheDocument();
    expect(hello).toMatchSnapshot();
})