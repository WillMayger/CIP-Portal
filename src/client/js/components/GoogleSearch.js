/** @jsx React.DOM */

var React = require('../../../../node_modules/react/react.js');
// react component DateBox will return a date time that updates every 50 miliseconds and appends it to a div with an id of 'date_box'

function GetValueFromGoogleSearchInput(){
        var GoogleSearch = document.getElementById("google_search_input");
        var UserSearchQuery = GoogleSearch.value.toString().replace(/ /g,"+");
        var GET = "http://google.com/#q=" + UserSearchQuery;
        window.open(GET, '_blank');
    };
var GoogleSearchBox = React.createClass({
    //rendering the html elements with the state.clock
    render: function() {
        return (
            <div className="google_search">
            <input type="hidden"></input>
                <input type="text" value="" placeholder="Type here to search google" name="google_search_input" id="google_search_input">
                </input>
                <button id="google_search_button" onClick={GetValueFromGoogleSearchInput()}></button>
            </div>
        );
    }
}); 
//rendering with react to put onto the html
module.exports = GoogleSearchBox;
