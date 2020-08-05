import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForList = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);