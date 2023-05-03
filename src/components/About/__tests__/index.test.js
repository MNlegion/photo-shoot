import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';
import Nav from '../../Nav';

afterEach(cleanup);

describe('About component', () => { 
    // First Test
    it('renders the About component', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})
