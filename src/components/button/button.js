import React from 'react'

const sayTheLabel = () => {
  alert('A label desse botão é: ' + Button.defaultProps.label)
  
}

const Button = (props) => {
  return <button 
    className='btn'
    onClick={sayTheLabel}>
      {props.label}
    </button>
}

Button.defaultProps = {
  label: 'Aperta ai rapidão'
}

export default Button