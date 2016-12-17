var GreeterMessage = React.createClass ({
    render: function(){
        return (
            <div>
            <h1> Some h1 </h1>
            <p> Some paragraph </p>
            </div>
        );
    }
});

var GreeterForm = React.createClass ({
    onFormSubmit: function(){
        e.preventDefault();

        var name = this.refs.name.value;

        if (name.length > 0){
            this.refs.name.value = ''; //5:26
        } 
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" />
                <button> Set Name </button>
              </form>
        );
    }

});
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
            
            <GreeterMessage />

              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button> Set Name </button>
              </form>

              <GreeterForm />

         </div>
          );
      }
  });
  
  var firstName = "Arnab";
  ReactDOM.render(
        <Greeter name={firstName} /> , document.getElementById('app')
    );
 //   chaper 15