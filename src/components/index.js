import App from './App';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const mapStateToProps = ({ charsReducer }) => {
	const { chars, isFetching, err } = charsReducer;
	return { chars, isFetching, err };
};
  
export default connect(mapStateToProps, { fetchData })(App);
