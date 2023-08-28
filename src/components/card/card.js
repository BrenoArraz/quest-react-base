import React from 'react'

const showCardColor = (colors) => {
  alert('A cor desse paragrafo é ' + colors)
}

const Card = ({colors, text}) => {
  return (
    <div 
    style={{ color: colors, textTransform: text}}
    onClick={() => showCardColor(colors)}>
      <p>essa é a quest de base do react</p>
    </div>
  )
}

Card.defaultProps = {
  colors: 'red',
  text: 'uppercase'
}

export default Card
