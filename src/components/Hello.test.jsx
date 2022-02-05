import { render, screen } from "@testing-library/react";
import Hello from "./hello.jsx";

test("print hello world to the user", () => {
    render(<Hello/>);

    const hello = screen.getByText("Hello world");
    expect(hello).toBeInTheDocument();
    expect(hello).toMatchSnapshot();
})