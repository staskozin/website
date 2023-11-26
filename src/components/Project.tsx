import Link from 'next/link'
import ResponsiveImage from '@/components/UI/ResponsiveImage'

import s from './Project.module.css'


export default function Project(props: ProjectProps) {
  return (
    <Link className={s.project} href={props.href}>
      <ResponsiveImage image={props.view} />
      <span className={s.text}>{props.text}</span>
    </Link>
  )
}

type ProjectProps = {
  href: string
  text: string
  view: JSX.Element
}
