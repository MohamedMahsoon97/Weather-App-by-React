import React, { Component } from 'react';
import "./App.css"
import Form from './Components/Form';
import Weather from './Components/Weather';

const apiKey = "129a31917ed67aecb5fc1e4283b1cbef" ;
// "http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44"

class App extends Component {

    state = {
        city : '',
        country : '',
        temp : '',
        humidity : '',
        description : '',
        error : ''
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}t&appid=${apiKey}`);
        const data = await api.json();
        if (city && country) {
            this.setState ({
                city : data.name,
                country : data.sys.country,
                temp : data.main.temp,
                humidity : data.main.humidity,
                description : data.weather[0].description,
                error : ''
            })
        } else {
                this.setState({
                    city : '',
                    country : '',
                    temp : '',
                    humidity : '',
                    description : '',
                    error : 'Please enter data'
                })
        }
    }  

    render() {
        return (
              <div className="container">
                  <div className="weather-app">
                      <Form getWeather = {this.getWeather} />
                      <Weather 
                          city = {this.state.city}
                          country = {this.state.country}
                          temp = {this.state.temp}
                          humidity = {this.state.humidity}
                          description = {this.state.description}
                          error = {this.state.error}
                      />
                  </div>
              </div>
        )
    }
}
export default App;