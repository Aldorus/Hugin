import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Close from './Close';

Enzyme.configure({ adapter: new Adapter() });

describe('Close component', () => {
    it('should render a svg', () => {
        const wrapper = shallow(<Close/>);
        expect(wrapper.find('svg').length).toBe(1);
    });
});
