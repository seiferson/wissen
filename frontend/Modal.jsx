import React, {Component} from 'react';

class Modal extends Component {

    componentDidMount() {
        var that = this;

        $(`#${this.props.id}`).modal( {
            allowMultiple: false,
            detachable: false,
            onHidden: function() {
                if(that.props.onClosedCallback !== undefined) {
                    that.props.onClosedCallback();
                }
            },
            onShow: function() {
                if(that.props.onOpeningCallback !== undefined) {
                    that.props.onOpeningCallback();
                }
            }
        });
    }

    render() {
        var title;

        if( this.props.title !== undefined){
            title = <div className='header'>{this.props.title}</div>
        }

        return ReactDOM.createPortal((
            <div className={`ui ${this.props.modalType} modal`} style={{position: 'fixed'}} id={this.props.id}>
              {title}
              <div className={`${this.props.contentType} content`}>
                {this.props.children}
              </div>
            </div>
        ), document.getElementById('modals'));
    }
}

export default Modal;