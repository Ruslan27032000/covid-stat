import React from "react";
import styles from './App.module.css';
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Charts from "./Components/Charts/Charts";
import {fetchData} from "./API";

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        let fetchedData = await fetchData();
        this.setState({data: fetchedData});

    }

    handleCountryChange = async (country) => {
        let fetchedData = await fetchData(country);
        this.setState({data: fetchedData,country});

    }

    render() {
        const {data,country} = this.state;

        return (
            <div className={styles.container}>
                <img src="https://i.ibb.co/7QpKsCX/image.png" alt=""/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App;