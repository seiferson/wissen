import React, {Component} from 'react';

/*
    Semantic UI React Modal

    {Properties: {
        onClosedCallback: 'Callback function invoked after modal closing animation is over',
        onOpeningCallback: 'Callback function invoked before modal shows',
        title: 'Header title for the modal',
        id: 'Modal id',
        modalType: [
            '',
            'basic',
            'fullscreen',
            'mini',
            'tiny',
            'small',
            'large',
            'long',
            'longer'
        ],
        contentType: [
            '',
            'image',
            'scrolling'
        ]}
    }
*/
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

        return (
            <div className={`ui ${this.props.modalType} modal`} style={{position: 'fixed'}} id={this.props.id}>
              {title}
              <div className={`${this.props.contentType} content`}>
                {this.props.children}
              </div>
            </div>
        );
    }
}

export default Modal;