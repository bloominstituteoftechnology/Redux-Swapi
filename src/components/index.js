import App from './App';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const mapStateToProps = ({ charsReducer }) => {
	const { chars, isFetching } = charsReducer;
	return { chars, isFetching };
};
  
export default connect(mapStateToProps, { fetchData })(App);
