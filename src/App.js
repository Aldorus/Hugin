import React from 'react';
import Menu from './menu/Menu';
import Home from './home/Home';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Sponsors from './sponsors/Sponsors';
import Footer from './common/Footer';
import smoothScroll from "smooth-scroll";

class App extends React.Component {
    componentDidMount() {
        smoothScroll.init();
    };

    render() {
        return (
            <div className='app'>
                <Menu/>
                <div className="effect__opactity--apply" id="opacity-effect-apply">
                    <Home/>
                    <Skills/>
                    <Sponsors/>
                    <Projects/>
                </div>
                <Footer></Footer>
                <Contacts/>
            </div>
        );
    }
}

export default App;
