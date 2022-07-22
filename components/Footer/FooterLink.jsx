import React from 'react'
import Link from 'next/link'

const FooterLink = (props) => {
  return (
    <Link href={props.url}>
        <a className={props.className}>{props.children}</a>
    </Link>
  )
}

export default FooterLink