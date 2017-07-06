import React from 'react';

class Skills extends React.Component {

    testSkillDisplayer = () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if(currentScroll * 2 > document.getElementById('skills').offsetTop ) {
            document.getElementById('chart').classList.add('viewed');
            document.getElementById('grid').classList.add('viewed');
            document.getElementById('category').classList.add('viewed');
            document.removeEventListener('scroll', this.testSkillDisplayer);
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.testSkillDisplayer);
    }

    render() {
        return (
            <div className="component__skills screen" id="skills">
                <div className="screen__wrapper">
                    <h1>What I love to do</h1>
                    <div className="screen__inner-wrapper">
                        <div className="skill__chart" id="chart">
                            <div className="skill__chart-element">
                                <div className="fill colorFront" style={{height: "85%"}}></div>
                                <div className="text"><span className="name ng-binding">React</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorFront" style={{height: "105%"}}></div>
                                <div className="text"><span className="name ng-binding">AngularJS</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorFront" style={{height: "80%"}}></div>
                                <div className="text"><span className="name ng-binding">Jest - Mocha - CucumberJS</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorFront" style={{height: "100%"}}></div>
                                <div className="text"><span className="name ng-binding">SASS</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorMobile" style={{height: "70%"}}></div>
                                <div className="text"><span className="name ng-binding">Scrum</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorMobile" style={{height: "85%"}}></div>
                                <div className="text"><span className="name ng-binding">BEM - Atomic</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorMobile" style={{height: "85%"}}></div>
                                <div className="text"><span className="name ng-binding">TDD - BDD</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorMobile" style={{height: "75%"}}></div>
                                <div className="text"><span className="name ng-binding">Architecture</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorBackend" style={{height: "95%"}}></div>
                                <div className="text"><span className="name ng-binding">NodeJS</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorBackend" style={{height: "100%"}}></div>
                                <div className="text"><span className="name ng-binding">Express</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorDev" style={{height: "90%"}}></div>
                                <div className="text"><span className="name ng-binding">Gulp - Webpack</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorDev" style={{height: "95%"}}></div>
                                <div className="text"><span className="name ng-binding">Git</span>
                                </div>
                            </div>
                            <div className="skill__chart-element">
                                <div className="fill colorDev" style={{height: "85%"}}></div>
                                <div className="text"><span className="name ng-binding">C. Integration</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid" id="grid">
                            <div className="awesome">Awesome</div>
                            <div className="excellent">Excellent</div>
                            <div className="great">Great</div>
                            <div className="not-bad">Not Bad</div>
                            <div className="very-sad">Very sad</div>
                            <div className="none">No comment</div>
                        </div>
                        <div className="category" id="category">
                            <div className="front">Frontend</div>
                            <div className="mobile">Methodologies</div>
                            <div className="backend">Backend</div>
                            <div className="lead">Development Tools</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
