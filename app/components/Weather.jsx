import React, {PropTypes} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/OpenWeatherMap';

export default class Weather extends React.Component {

    constructor(){

        super();
        this.state= {
            location:'Miami',
            temp:88
        };

     this.handleSearch = this.handleSearch.bind(this);
    }


    handleSearch(location){

       openWeatherMap.getTemp(location).then(temp =>{


           this.setState({
               location:location,
               temp:temp
           });
       }).catch(err=>{
           alert(err);
       });
    }

  render() {

    let {temp,location} =this.state;

    return (<div>
    	 <WeatherForm onSearch={this.handleSearch}/>
    	 <WeatherMessage  temp={temp} location={location}/>
    </div>);
  }
}

Weather.propTypes = {
};


//9498012f274c5c05516b20f96f05f0cd
