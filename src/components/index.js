import App from './App';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const mapStateToProps = ({ charsReducer }) => {
	const { chars, isFetching, err } = charsReducer;
	return { chars, isFetching, err };
};

const mapDispatchToProps = dispatch => ({
	fetchData: (ext='') => {
		dispatch(fetchData(`https://swapi.co/api/people/${ext}`))
	}
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
