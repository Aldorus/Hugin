import React from "react";
import Close from "../common/Close";
import "./projects.scss";

class Projects extends React.Component {

    componentWillMount = () => {
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape') {
                this.closeProject();
            }
        });
    };

    projects = [
        {
            id: 'dashboard',
            label: 'Dataviz dashboard',
            src: '/assets/projects/dataviz-2.png',
            description: 'B2b <strong>data visualisation</strong> project. With this dashboard our customer is able to easily see which element of his stock is not sold yet. He can focus to sell this available unit and has significantly increase his sell volume.',
            technologies: ['Angular', 'SASS', 'CucumberJS'],
            date: 'November 2015 - March 2016',
            company: 'Valtech France'
        },
        {
            id: 'dashboard',
            label: 'Bot Alexa/Google Home',
            src: '/assets/projects/shopping-assistant.png',
            description: 'Few month ago, I started to work with this news technologies. <strong>Alexa</strong> and <strong>Google Home</strong> open lot of possibilities and will be, in few years, part of our daily habits.',
            technologies: ['React', 'NodeJS', 'Socket.io'],
            date: 'December 2016 - April 2017',
            company: 'Valtech Canada'
        },
        {
            id: 'kiwapp',
            label: 'Kiwapp',
            src: '/assets/projects/new-look.png',
            description: 'Kiwapp is now a product edited by Ocito.<br/>It allow you to offer a personalized tablet to your customers and coworkers and display your product offers, helpful information, and entertainment. You can also show information and games to welcome your current customers.',
            technologies: ['Angular', 'SASS', 'PHP'],
            date: 'November 2013 - September 2015',
        },
        {
            id: 'interface',
            label: 'Interface for bank customers',
            src: '/assets/projects/ca.png',
            description: 'A specific project made with <strong>Kiwapp</strong> and available in many bank agencies. With this tool our client bring more satisfaction to his customer and is able to collect new information on them.',
            technologies: ['Angular', 'SASS', 'Kiwapp'],
            date: 'November 2013 - September 2015',
            company: 'Kiwapp'
        },
        {
            id: 'plateform',
            label: 'Ivanhoé Cambridge platform',
            src: '/assets/projects/ivanhoe-cambridge.png',
            description: 'This platform host all the 21 client\'s websites and is visited by more than <strong>1 million customers per month</strong>. Everything has been designed to answer efficiently to each website specificities without compromise the common backbone.',
            technologies: ['SASS', 'JQuery'],
            date: 'May 2016 - November 2016',
            company: 'Kiwapp'
        },
        {
            id: 'dashboard',
            label: 'Banking public application',
            src: '/assets/projects/public-bank.png',
            description: 'Even few years later, one of my proudest work. An application downloaded more than 3 millions times. After the rebranding we have operated, we have increased the rating from less than 3 to almost 4 stars, on the <strong>Google play store</strong>.',
            technologies: ['Android'],
            date: 'October 2012 - October 2013',
            company: 'Kiwapp'
        }
    ];

    openProject = (project) => {
        document.getElementById(project).classList.add('open');
        this.setState({
            projectOpened: document.getElementById(project)
        });
    };

    closeProject = () => {
        if(this.state) {
            this.state.projectOpened.classList.remove('open');
        }
        this.setState({
            projectOpened: null
        });
    };

    renderTechno = (techno, index) => {
        return <li key={index}><strong>{techno}</strong></li>;
    };

    renderCloseButton = () => {
        if(this.state && this.state.projectOpened) {
            return <div className="close-button"
                 onClick={() => this.closeProject()}>
                <Close/>
            </div>;
        }
    };

    renderProject = (project, index) => {
        return <div key={index}>
            <article className="projects__list--item" id={`project-${index}`}>
                <h2 className="project-item__title" onClick={() => this.openProject(`project-${index}`)}><span
                    className="project-item__prefix">0{index + 1}. </span>{project.label}</h2>
                <div className="project-item__info">
                    <div className="project-item__image-project"
                         style={{backgroundImage: `url('${project.src}')`}}
                         alt={`illustation ${project.label}`}></div>
                    <div className="project-item__description">
                        <h2>{project.label}</h2>
                        <h3>{project.company}</h3>
                        <span className="project-item__date">{project.date}</span>
                        <div><p dangerouslySetInnerHTML={{__html: project.description}}></p></div>
                        <ul className="project-item__techno-list">
                            {project.technologies.map(this.renderTechno)}
                        </ul>
                        {this.renderCloseButton()}
                    </div>
                </div>
            </article>
        </div>;
    };

    render() {
        return (
            <div className="component__projects screen" id="projects">
                <div className="screen__wrapper">
                    <h1>Featured works</h1>
                    <section className="projects__list">
                        {this.projects.map(this.renderProject)}
                    </section>
                </div>
            </div>
        );
    }
}

export default Projects;
