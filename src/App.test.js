import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the translation workspace", () => {
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /language translation/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("button", { name: /english/i })
    ).toBeInTheDocument();
});