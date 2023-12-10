import s from './ResponsiveImage.module.css'


export default function Project(props: ProjectProps) {
  return (
    <div className={s.wrap}>
      {props.image}
    </div>
  )
}

type ProjectProps = {
  image: JSX.Element
}
