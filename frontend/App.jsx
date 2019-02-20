 class App extends React.Component{

        render(){
          var loginFormData = [
            {
              name : 'user',
              id : 'user',
              type : 'text',
              text : 'User'
            },
            {
              name : 'passwd',
              id : 'passwd',
              type : 'password',
              text : 'Password'
            }
          ];
          return (
            <React.Fragment>
              <TopMenu/>
              <Modal title='Authentication stage' id='authmodal'>
                <IconMessage message='Welcome to wissen, please provide your credentials.' header='Hi! Stranger'/>
                <Form fields={loginFormData} />
              </Modal>
            </React.Fragment>
          );
        }
      }

      class TopMenu extends React.Component{

        static defaultProps = {
          userName : 'Anonymous'
        }

        constructor(props){
          super(props);
        }

        handleClick(){
          $(".modal").modal("show");
        }

        render(){
          return (
            <div className="ui top attached menu">
              <div className="ui item">
                <a href="/"><h3 className="ui header">Wissen</h3></a>
              </div>
              <div className="ui right item" onClick={this.handleClick}>
                <i className="large user circle outline icon"></i>
                <span>{this.props.userName}</span>
              </div>
            </div>
          );
        }
      }

      class Modal extends React.Component{
        
        static defaultProps = {
          id : '',
          title : 'Empty modal',
          children : <p>Empty modal</p>
        }

        render(){
          return (
            <div className="ui modal" id={this.id}>
              <i className="close icon"></i>
              <div className="header">{this.props.title}</div>
              <div className="content">{this.props.children}</div>
            </div>
          );
        }
      }

      class IconMessage extends React.Component{
        static defaultProps = {
          header : 'Title',
          message : 'Message goes here'
        }
       
        render(){
          return (
            <div className="ui icon message">
              <i className="id badge icon"></i>
              <div className="content">
                <div className="header">{this.props.header}</div>
                <p>{this.props.message}</p>
              </div>
            </div>
          );
        }
      }
      
      class Form extends React.Component{
      	handleClick(){
          this.props.func();
        }

        render(){
          return (
            <form className="ui form">
              {this.props.fields.map((entry, i) =>{
              	return(
              	  <div className="field">
              	    <label for={entry.name}>{entry.text}</label>
              	    <input type={entry.type} id={entry.id} name={entry.name}/>
              	  </div>
          	    );
              })}
              <button className="ui button" type="button" onClick={this.handleClick}>Login</button>
            </form>
          );
        }
      }


      ReactDOM.render( <App/>, document.getElementById('root'));
      $('.ui.modal').modal({allowMultiple: false});