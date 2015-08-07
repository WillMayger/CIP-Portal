/** @jsx React.DOM */

var React = require('../../../../node_modules/react/react.js');
// react component DateBox will return a date time that updates every 50 miliseconds and appends it to a div with an id of 'date_box'
var GoogleSearchBox = React.createClass({
    GetValueFromGoogleSearchInput: function(event){
    	var GoogleSearch = document.getElementById("google_search_input");
    	var UserSearchQuery = GoogleSearch.value.toString().replace(/ /g,"+");
    	var GET = "http://google.com/#q=" + UserSearchQuery;
    	window.open(GET, '_blank');
    },
    getInitialState() {
        return { value: '' };
    },

    handleChange(event) {
        this.setState({value: event.target.value});
    },
    //rendering the html elements with the state.clock
    render: function() {
        return (
            <div className="google_search">
                <input type="text" value={this.state.value} placeholder="Type here to search google" name="google_search_input" id="google_search_input">
                </input>
                <div>
                    <button id="google_search_button" onClick={this.GetValueFromGoogleSearchInput}></button>
                </div>
            </div>
        );
    }
}); 
//rendering with react to put onto the html
module.exports = GoogleSearchBox;
