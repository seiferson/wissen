import React, {Component, Fragment} from 'react';

const ENDPOINT = '/api/v1/notes';
const SYNC_ICON = 'check circle outline';
const SYNC_COLOR = 'green';
const SYNC_TEXT = 'sync';
const OUT_OF_SYNC_ICON = 'sync alternate';
const OUT_OF_SYNC_COLOR = 'yellow';
const OUT_OF_SYNC_TEXT = 'out of sync'

class Notes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: {},
            note: null,
            text: '',
            updateQueue: []
        };

        this.handleQueueProcessing = this.handleQueueProcessing.bind(this);
    }

    componentDidMount() {
        var that = this;

        this.props.authCallback(
            function() {
                that.handleGetNotes();

                $('.ui.search').search({
                    minCharacters: 3,
                    apiSettings: {
                        url: ENDPOINT + '/search?text={query}',
                        onResponse: function(APIResponse) {
                            var response = {
                                results : []
                            };
                            $.each(APIResponse, function(index, item) {
                                response.results.push({
                                    title       : item.text.split('\n')[0].substring(0, 25),
                                    description : item.id
                                });
                            });
                            return response;
                        },
                        beforeXHR: function(xhr) {
                            xhr.setRequestHeader ('Authorization', 'Bearer ' + that.props.token);
                            xhr.setRequestHeader ('Accept', 'application/json');
                            return xhr;
                        }
                    },
                    onSelect: function(result, response) {
                        that.setState({'note': result.description, 'text': that.state.notes[result.description].text});
                        $('.ui.search').search('hide results', function() {});
                        $('.ui.search').search('set value', '');
                        return false;
                    },
                });
            },
            function() {
                that.props.parentStateCallback({layout : 'home'});
        });
    }

    handleQueueProcessing() {
        var queue = this.state.updateQueue;
        var that = this;
        queue.map((event, i) =>{
            that.handleUpdateNote(event);
        });
        queue = [];
        this.setState({updateQueue: queue});
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        var note = this.state.note;
        var queue = this.state.updateQueue;
        var notes = this.state.notes;

        notes[note].text = value;

        if(!queue.includes(note)){
            queue.push(note);
        }

        this.setState({[name]: value, updateQueue: queue, 'notes': notes});
    }

    handleCreateNote() {
        var that = this;

        fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({owner: that.props.user, text: new Date() + '\n\n[Start here]', encrypted: false})
        })
        .then(response => response.json())
        .then(function(data) {
            var notes = that.state.notes;
            var note = data.data;

            note.color = getRandomColor();
            notes[note.id] = note;

            that.setState({
                'notes': notes,
                'note': note.id,
                'text': note.text
            });
        });
    }

    handleDeleteNote(id) {
        var that = this;

        fetch(ENDPOINT + '/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json'
            }
        })
        .then(function(response) {
            if(response.status === 200) {
                var notes = that.state.notes;
                delete notes[id];
                var keys = Object.keys(notes);

                if(keys.length > 0){
                    var note = notes[keys[0]];
                    that.setState({
                        'notes': notes,
                        'note': note.id,
                        'text': note.text
                    });
                } else {
                    that.setState({
                        'notes': notes,
                        'note': null,
                        'text': ''
                    });
                }
            } else {
                throw Error(response.statusText);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    handleGetNotes() {
        var that = this;

        fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(function(data) {
            var notes = {};

            if(data.length) {
                data.map((entry, i) =>{
                    notes[entry.id] = entry;
                    notes[entry.id].color = getRandomColor();
                });
                that.setState({
                    'notes': notes,
                    'note': data[0].id,
                    'text': data[0].text
                });
            }
        });
    }

    handleSelectNote(id) {
        this.setState({
            'note': id,
            'text': this.state.notes[id].text
        });
    }

    handleUpdateNote(id) {
        var that = this;

        fetch(ENDPOINT + '/' + id, {
            method: 'PATCH',
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text:  this.state.notes[id].text, encrypted: this.state.notes[id].encrypted})
        })
        .then(function(response) {
            if(response.status !== 200) {
                throw Error(response.statusText);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        var workarea = null;
        var that = this;
        var notes = null;

        if(Object.keys(this.state.notes).length > 0) {
            notes = (
              <div className='ui middle aligned selection list'>
                {Object.keys(this.state.notes).map((key, i) =>{
                  var entry = that.state.notes[key];
                  var active = '';
                  if(entry.id == that.state.note){
                      active = 'active';
                  }
                  return(
                    <div className={`${active} item`} onClick={function() {that.handleSelectNote(entry.id)}}>
                      <i className={`sticky note outline ${entry.color} icon`}></i>
                      <div className='content'>
                        <div className='header'>{entry.text.split('\n')[0].substring(0, 25)} ...</div>
                        <div className='description'>
                          <span className={`ui ${entry.color} text right floated`}>{entry.id}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
        }

        if(this.state.note != null) {
            var statusColor = null;
            var statusIcon = null;
            var statusText = null;
            var encryptedIcon = null;

            if(this.state.updateQueue.length) {
                statusColor = OUT_OF_SYNC_COLOR;
                statusIcon = OUT_OF_SYNC_ICON;
                statusText = OUT_OF_SYNC_TEXT;
            } else {
                statusColor = SYNC_COLOR;
                statusIcon = SYNC_ICON;
                statusText = SYNC_TEXT;
            }

            if(this.state.notes[this.state.note].encrypted){
                encryptedIcon = 'eye outline';
            } else {
                encryptedIcon = 'eye slash outline';
            }

            workarea = (
              <form className='ui form'>
                <div className={`ui tiny basic right floated ${statusColor} label`}>
                  <i className={`${statusIcon} icon`}></i> {statusText}
                </div>
                <div className="ui icon buttons">
                  <button
                    className='ui tertiary icon button'
                    type='button'
                    onClick={function() {
                        that.handleQueueProcessing();
                    }}>
                    <i className='save outline icon'></i>
                  </button>
                  <button
                    className='ui tertiary icon button'
                    type='button'
                    onClick={function() {that.handleDeleteNote(that.state.note)}}>
                    <i className='trash alternate outline icon'></i>
                  </button>
                  <button
                    className='ui tertiary icon button'
                    type='button'
                    onClick={function() {
                        var notes = that.state.notes;
                        var note = that.state.note;
                        var queue = that.state.updateQueue;
                        var text = that.state.text;

                        var key = cryptico.generateRSAKey(md5(that.props.user), 1024);

                        if(notes[note].encrypted){
                            text = cryptico.decrypt(text, key).plaintext;
                        } else {
                            text = cryptico.encrypt(text, cryptico.publicKeyString(key)).cipher;
                        }

                        notes[note].text = text;
                        notes[note].encrypted = !notes[note].encrypted;

                        if(!queue.includes(note)){
                            queue.push(note);
                        }

                        that.setState({'notes': notes, 'text': text, updateQueue: queue});
                    }}>
                    <i className={`${encryptedIcon} icon`}></i>
                  </button>
                </div>
                <div className='field'>
                  <textarea
                    className='transparent'
                    name='text'
                    placeholder='Note content'
                    value={this.state.text}
                    onInput={(event) => this.handleUserInput(event)}></textarea>
                </div>
              </form>
            );
        } else {
            workarea = (
              <div className='ui icon message'>
                <i className='sticky note outline icon'></i>
                <div className='content'>
                  <p>Currently you don't have any notes, please click on the add button on the left <i className='plus fitted icon'></i> to start</p>
                </div>
              </div>
            );
        }

        return (
          <Fragment>
            <div className='ui container'>
              <div className='ui stackable mobile reversed grid'>
                <div className='five wide column'>
                  <div className='ui grid'>
                    <div className='thirteen wide column'>
                      <div className='ui search'>
                        <div className='ui fluid icon input'>
                          <input className='prompt' type='text' placeholder='Search notes...' />
                          <i className='search icon'></i>
                        </div>
                        <div className="results"></div>
                      </div>
                    </div>
                    <div className='three wide column'>
                      <button className='ui basic circular icon button' onClick={function() {that.handleCreateNote();}}>
                        <i className='plus icon'></i>
                      </button>
                    </div>
                  </div>
                  <br />
                  {notes}
                </div>
                <div className='eleven wide column'>
                    <br />
                    {workarea}
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Notes;
