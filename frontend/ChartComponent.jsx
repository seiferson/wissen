import React, {Component, Fragment} from 'react';

class ChartComponent extends Component {

    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}
        });
      }

    componentDidUpdate() {
        //this.myChart.data.labels = this.props.data.map(d => d.label);
        //this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        //this.myChart.update();
    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }
}

export default ChartComponent;