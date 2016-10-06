import React, {PropTypes} from 'react';

export default class WeatherMessage extends React.Component {
    
  render() {
      let {temp,location} = this.props;
    return (<div>
      <h1>It's it {temp} in {location}</h1>

    </div>);
  }
}

WeatherMessage.propTypes = {
};
