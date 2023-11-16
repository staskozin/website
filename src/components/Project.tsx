import Link from 'next/link'

import s from './Project.module.css'


export default function Project(props: ProjectProps) {
  return (
    <Link className={s.project} href={props.href}>
      <div className={s.imagewrap}>
        {props.view}
      </div>
      <span>{props.text}</span>
    </Link>
  )
}

type ProjectProps = {
  href: string
  text: string
  view: JSX.Element
}
