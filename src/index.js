import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Cq extends React.Component {
	render() {
		return (
    		<App/>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
