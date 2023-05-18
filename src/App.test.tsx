import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
    return x + y
}
describe('App Componet', () => {
    it('should sum correctly', () => {
        expect(sum(4, 4)).toBe(8)
    });

    it('should render App with hello message', () => {
        render(<App />)

        screen.getByText("Hello world!");
    });

    it('should render message on button click', () => {
        render(<App />)

        screen.getByText("Let's learn more abaout testing in React");

        const button = screen.getByText(/Change message/i)
        fireEvent.click(button)

        screen.getByText(/new message/i)
        const oldMessage = screen.queryByText("Let's learn more abaout testing in React")

        //expect(oldMessage).toBeNull()
        expect(oldMessage).not.toBeInTheDocument();


    });

})

export default sum;