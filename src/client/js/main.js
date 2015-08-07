/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');


var DateBox = require('./components/DateBox.js');
var NewsBox = require('./components/news.js').NewsBox;
var TileBox = require('./components/tiles.js').TileBox;
var LogoutBox = require('./components/Logout.js').LogoutBox;
var GoogleSearchBox = require('./components/GoogleSearch.js');




React.render(
  <DateBox />,
  document.getElementById('date_box')
);


React.render(
  <NewsBox url="news/" />,
  document.getElementById('news_box')
);

React.render(
  <TileBox url="tiles/" />,
  document.getElementById('tiles_box')
);

var data = [{
      "email": "someEmail@canopy-cloud.com",
}];

React.render(
  <LogoutBox data={data} />,
  document.getElementById('logout')
);


React.render(
  <GoogleSearchBox />,
  document.getElementById('google_search_box')
);