import React from 'react'
import Link from 'next/link'

const FooterLink = (props) => {
  return (
    <Link href={props.url}>
        <a className="text-personal-neutralLight px-2 hover:underline">{props.children}</a>
    </Link>
  )
}

export default FooterLink