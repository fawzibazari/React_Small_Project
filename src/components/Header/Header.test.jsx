import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

test("print hello world to the user", () => {
    render(<Header/>);

    const hello = screen.getByTestId("test_header");
    expect(hello).toBeInTheDocument();
    expect(hello).toMatchSnapshot();
    expect(hello).toHaveClass("hello");

})