import React, {Component, Fragment} from 'react';

class ChartComponent extends Component {

    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.chartObj = new Chart(this.chartRef.current, {
            type: this.props.type,
            data: this.props.data,
            options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}
        });
      }

    componentDidUpdate() {
        this.chartObj.data = this.props.data;
        this.chartObj.type = this.props.type;
        this.chartObj.update();
    }

    render() {
        return (
            <canvas ref={this.chartRef}/>
        );
    }
}

export default ChartComponent;