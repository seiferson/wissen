
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