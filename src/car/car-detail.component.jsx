import React, { Component } from 'react';
import DataAll from '../data.jsx';


/*const CarDetail = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
        <p>
            {DataAll[match.params.id].name}
            {}
        </p>
    </div>
);*/

class CarDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    componentWillMount(){
        console.log(this.state.loading);
    }
    componentDidMount(){
        this.setState({
            loading: false
        });
        console.log(this.state.loading);
    }
    getProjectId() {
        console.log(DataAll);
        let projectID = DataAll.filter(el => {
            return el.id == this.props.match.params.id;
        });
        return projectID[0];
    };
    render(){
        const cars = this.props.match.params.id;
        const item = this.getProjectId();
        console.log(name);
        return(
            <div>
                <h2>{item.name}</h2>
                <img src={item.media} alt="" width="100%"/>
                <table>
                    <tr><td>year</td><td>{item.year}</td></tr>
                    <tr><td>model</td><td>{item.model}</td></tr>
                    <tr><td>make</td><td>{item.make}</td></tr>
                    <tr><td>price</td><td>{item.price}</td></tr>
                </table>
            </div>
        );
    }
}

export default CarDetail