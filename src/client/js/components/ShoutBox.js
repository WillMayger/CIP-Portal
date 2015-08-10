/** @jsx React.DOM */

var React = require('../../../../node_modules/react/react.js');

//This TileBox component will put tiles into the html for the user.
var ShoutBox = React.createClass({
  //renders the html
  render: function() {
    return (
      <div className="shout_box">
        <ShoutBoxMessage data={this.props.data} />
        <ShoutBoxInput />
      </div>
    );
  }  
});


var ShoutBoxMessage = React.createClass({
  //renders the html
  render: function() {

    var UserMessage = this.props.data.map(function (user) {
      return (
        <div className="shout_box_message">
        <h3>{user.message}</h3>
        <h4><i> - {user.user_name}</i></h4>
      </div>
      );
    });
    return (
      <div>{UserMessage}</div>
    );
  }  
});


var ShoutBoxInput = React.createClass({
  SendInfo: function(){
    var ShoutBox = document.getElementById("shout_box_input");
    var UserMessage = ShoutBox.value.toString();

    //Must use a diffrent way to get user in production!
    var Email = document.getElementsByClassName('LogoutUserInfo').innerHTML.toString();
    console.log("send to api: '"+UserMessage+" - "+Email+ "'");

  },
  getInitialState: function() {
        return { value: '' };
  },
  handleChange: function(event) {
          this.setState({value: event.target.value});
  },

  //renders the html
  render: function() {

    return (
      <div className="shout_box_input">
      <input type="text" className="form-control" id="shout_box_input" value={this.state.value} onChange={this.handleChange}>
      </input>
      <button onClick={this.SendInfo}>submit</button>
      </div>
    );
  }  
});




//rendering the react to the html
module.exports = {
  ShoutBox : ShoutBox,
  ShoutBoxMessage : ShoutBoxMessage,
  ShoutBoxInput : ShoutBoxInput
};