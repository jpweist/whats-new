import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  const styles = {
    backgrgoundColor: props.cardColor,
    height: props.height,
    width: props.width
  }

  return (
    <div styles={styles}></div>
  )
}

Card.propTypes = {
  cardColor: PropTypes.string
}

Card.defaultProps = {
  cardColor: "coral",
  height: 100,
  width: 100
}

export default Card
