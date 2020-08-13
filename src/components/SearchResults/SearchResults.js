import React from 'react';
import styles from '../SearchResults/SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';


class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  static defaultProps ={
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>          
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}                  
        </section>
      </Container>
      
    );
  }
}

export default SearchResult;