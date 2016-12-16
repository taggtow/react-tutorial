  var Greeter = React.createClass ({
      getDefaultProps: function(){
          return{
            name: 'React',
            message: 'This is the default message from React Component.'
          };
      },
      getInitialState: function(){
          return {
              name: this.props.name 
          };
      },
      onButtonClick: function(e){
          e.preventDefault();
          var nameRef = this.refs.name ;
          name = nameRef.value ;
          nameRef.value = '';

          if (typeof name === 'string' && name.length > 0 ) {
            this.setState ({
                name:name
            });
          }
      },
      render: function(){
          //var name = this.props.name ;
          var name = this.state.name ;
          var message = this.props.message ;
          return (
        <div>
              <h1> Hello {name} ! </h1>
              <p>
                {message + '!!'}
              </p>
            

              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button> Set Name </button>
              </form>

         </div>
          );
      }
  });
  
  var firstName = "Arnab";
  ReactDOM.render(
        <Greeter name={firstName} /> , document.getElementById('app')
    );
 //   chaper 11