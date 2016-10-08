import React, {PropTypes} from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-centered">About</h1>
            <p>This is a Weather Application built on React</p>
            <p>Some of the Tools i uses</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React
                    This was the javascript framework used.
                    </a>
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a>
                </li>
            </ul>
    </div>);
}


export default About;
