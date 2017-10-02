import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const component = shallow(<App/>);
    expect(true).toBe(true);
});
