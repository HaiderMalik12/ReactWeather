import React from 'react';

class WeatherForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {

        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
                <h1>Get Weather</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/><br/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}


export default WeatherForm;