import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {lat: null, errMessage:''} 
    // }
    state = { lat: null, errMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errMessage: err.message })
        );
    }
    renderContent() {
        if (!this.state.errMessage && this.state.lat) {
            return (
                <div> <SeasonDisplay lat={this.state.lat} /> </div>
            );
        }
        if (this.state.errMessage && !this.state.lat) {
            return (
                <div>Error : {this.state.errMessage}</div>
            );
        }
        return <div><Spinner message="Please allow location request" /></div>
    }
    render() {
        return(
        <div>
            {this.renderContent()}
        </div>
        );
    };

}

ReactDOM.render(<App />, document.getElementById("root"));