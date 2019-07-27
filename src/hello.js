import React from 'react'
import PropTypes from 'prop-types'
import './hello.stylus'

class Hello extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div className="hello">
        Hello,
        {name}
      </div>
    )
  }
}

Hello.propTypes = {
  name: PropTypes.string,
}

Hello.defaultProps = {
  name: '',
}

export default Hello
