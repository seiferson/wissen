import React, {Component} from 'react';

class Content extends Component {

    render() {
        const classMap = {
            h1: 'ui large header',
            h2: 'ui medium header',
        }

        var converter = new showdown.Converter();
        converter.setOption('headerLevelStart','4');
        var html = { __html: converter.makeHtml(this.props.content)};

        return (
            <div className='ui segment' dangerouslySetInnerHTML={html}></div>
        );
    }
}

export default Content;