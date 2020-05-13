import React from 'react';
import { render } from '@testing-library/react'
import ListItem from './ListItem'

describe("AlertMessage", () => {
    let props = {
        children: "hello",
        cart: true,
        onClick: jest.fn().mockImplementation(() => false),
    };

    it("should match snapshot", () => {
        const { container } = render(<ListItem {...props} />);
        expect(container).toMatchSnapshot();
    });

    it("should close when close button is clicked", () => {
        const { getByText } = render(<ListItem {...props} />);

        fireEvent.click(getByText("k"));
        expect(props.onClick).toHaveBeenCalled();
        expect(props.onClick).toHaveBeenCalledWith(false);
    });
});


// describe('List item', () => {
//     it('Renders children', () => {
//         const { getByText } = render(
//             <ListItem>Hello</ListItem>
//         );
//         getByText("Hello");
//         expect(getByText).toMatchSnapshot();
//     })
// })
