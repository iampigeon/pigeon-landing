import React, { PureComponent } from 'react';
import PropType from 'prop-types'

const styles = {
  leftRadius: {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  },
  rightRadius: {
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  },
}

export default class ContactInput extends PureComponent {
  _clickButton = () => {
    window.open(this.props.url, '_blank');
  }

  render () {
    const {placeholder, buttonText, buttonColor} = this.props
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Open Sans',
        // borderBottomRightRadius: '10px',
        // borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
      }}>
        <input 
          style={{
            flex: 0.80,
            paddingLeft: '25px',
            border: `solid 1px ${buttonColor}`,
            fontSize: '1.5em',
            marginLeft: '10px',
            color: '#dededf',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            height: '70px',
          }} 
          type='text' 
          placeholder={placeholder} 
        />
        <div 
          onClick={this._clickButton}
          style={{
            flex: 0.20,
            padding: '10px 25px',
            color: 'white',
            backgroundColor: buttonColor,
            fontSize: '1.5em',
            fontWeight: '300',
            borderBottomRightRadius: '10px',
            borderTopRightRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `${buttonColor} solid 1px`,
          }}>
          {buttonText}
        </div>
      </div>
    )
  }
}

ContactInput.propTypes = {
  placeholder: PropType.string.isRequired,
  buttonText: PropType.string.isRequired,
  buttonColor: PropType.string.isRequired,
  url: PropType.string.isRequired,
}