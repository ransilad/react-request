import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'react-http-request'

var App = React.createClass({
  render: function() {
    return (
      <Request
        url='https://api.github.com/users/ransilad'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
