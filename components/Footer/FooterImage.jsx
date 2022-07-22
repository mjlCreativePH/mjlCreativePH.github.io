import React from 'react'

const FooterImage = (props) => {
  return (
    <img src={props.url} alt={props.alt} className="w-8 h-8 hover:opacity-80"/>
  )
}

export default FooterImage