import React, {Component} from 'react';

class Dropdown extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('#' + this.props.id).dropdown({
            onChange : function(value, text, $selectedItem) {
                this.props.callback(this.props.id, value);
            }
        });
    }

    static getDerivedStateFromProps(props, prevState) {
        $('#' + this.props.id).dropdown({
            onChange : function(value, text, $selectedItem) {
                this.props.callback(this.props.id, value);
            }
        });
        return null;
    }

    render() {
        var items = ({this.props.tasks.map((entry, i) =>{
            return(<div class="item" data-value={entry.value}>{entry.text}</div>);
        });

        return (){
            <div className='ui fluid selection dropdown' id={this.props.id}>
              <input type="hidden" name="category" value='' />
              <i className="dropdown icon"></i>
              <div className="default text">{this.props.placeholder}</div>
              <div className="menu">
                {items}
              </div>
            </div>
        }
    }
}

export default Dropdown;