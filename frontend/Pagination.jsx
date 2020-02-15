import React, {Component, Fragment} from 'react';

class Pagination extends Component {

    render() {
        if(this.props.pages <= 1 ) {
            return(<Fragment />);
        }

        var next = (<Fragment />);
        var prev = (<Fragment />);

        if(this.props.pages !== this.props.current) {
            next = (
                <button class="ui right floated circular small icon button" onClick={this.props.nextCallback}>
                  <i class="angle right fitted icon"></i>
                </button>
            );
        }

        if(this.props.current > 1) {
            prev = (
                <button className='ui circular small icon button' onClick={this.props.prevCallback}>
                  <i className='angle left fitted icon'></i>
                </button>
            );
        }

        return(
            <div className='ui centered grid'>
              <div className='three wide column'>{prev}</div>
              <div className='four wide center aligned column'>{`${this.props.current} of ${this.props.pages}`}</div>
              <div className='three wide column'>{next}</div>
            </div>
        );
    }
}

export default Pagination;