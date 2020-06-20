import React, {Component, Fragment} from 'react';

class CodeCamp extends Component{

    constructor(props) {
        super(props);

        this.state = {
            output : ""
        }
    }

    time(that, params) {
        that.setState({'output': that.state.output + new Date() + '\n'});
    }

    clear(that, params) {
        that.setState({'output': ''});
    }

    access(that, params) {
        console.log(params)
        var tokens = params.split(/\s+/);
        if(tokens.length === 1){
            //request user name
        } else {
            var user = tokens[1];
            console.log(user);
        }
    }

    help(that, params) {
    }

    componentDidMount() {
        $('.prompt').html('[anonymous@wissen] # ');
    }

    processCommand(fullCommand){
        var command = fullCommand.split(' ')[0];
        var commands = {
            'time' : this.time,
            'clear': this.clear,
            'help': this.help,
            'access': this.access
        }
        if(commands[command]){
            commands[command](this, fullCommand);
        } else {
            this.setState({'output': this.state.output + 'command "' + command  + '" not found\n'});
        }
    }

    handleUserInput(e) {
        var that = this;
        var instruction = e.target.value;
        if(e.key === 'Enter'){
            $('#inputxd').val('');
            that.processCommand(instruction);
        }
    }

    render() {
        return(
            <div class="ui container">
              <div className='ui segment'>
                <h2 className='ui center aligned icon header'>
                  <i className='circular campground icon'></i>
                  <div class="content">Code camp</div>
                </h2>
              </div>
              <div className='ui inverted segment'>
                <output><pre>{this.state.output}</pre></output>
                <div id="input-line" className="input-line">
                  <div class="prompt"></div>
                  <div><input class="cmdline" id="inputxd" onKeyPress={(event) => this.handleUserInput(event)}/></div>
                </div>
              </div>
            </div>
        );
    }
}

export default CodeCamp;