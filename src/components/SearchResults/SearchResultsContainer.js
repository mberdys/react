import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.title),
});

export default connect(mapStateToProps)(SearchResults); 