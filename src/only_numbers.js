import React, { Component } from 'react';

class Onlynumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Kilometraje: '',
            regexp : /^[0-9\b]+$/
        };
        this.onHandleKmChange = this.onHandleKmChange.bind(this);
    }

    onHandleKmChange = e => {
        let distancia = e.target.value;

        if (distancia === '' || this.state.regexp.test(distancia)) {
            this.setState({ Kilometraje: distancia })
            console.log(e.target.value, this.state.Kilometraje)
        }
    };

    render() {
        return (
            <input type="text" className="form-control" id="validationDefault05"
            name="Kilometraje" value={this.state.Kilometraje} onChange={this.onHandleKmChange} required />
        );
    }
}

export default Onlynumbers;