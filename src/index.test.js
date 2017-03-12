jest.mock('adblockdetect');

import { mount } from 'enzyme';
import React from 'react';

const { detected } = require('adblockdetect');

import AdBlockDetect from './';

describe('<AdBlockDetect />', () => {
    it('does not render if an ad blocker is not installed', () => {
        detected.mockImplementation(() => false);

        const wrapper = mount(
            <AdBlockDetect>
                <div />
            </AdBlockDetect>
        );

        expect(wrapper.contains(<div />)).toBe(false);
    });

    it('renders if an ad blocker is installed', () => {
        detected.mockImplementation(() => true);

        const wrapper = mount(
            <AdBlockDetect>
                <div />
            </AdBlockDetect>
        );

        expect(wrapper.contains(<div />)).toBe(true);
    });
});
