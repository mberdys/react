import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    card: PropTypes.array,
  }

  render() {
    const {title, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
        
        </h3>

        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    )
  }
}

//<span className={styles.icon}><Icon name={icon}/></span>
export default Column;