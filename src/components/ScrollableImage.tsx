import { MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'

import s from './ScrollableImage.module.css'


export default function ScrollableImage(props: ScrollableImageProps) {
  const [currentImage, setCurrentImage] = useState(props.src[0])
  const controlRef = useRef(null)
  const imageRef = useRef(null)

  function createSegments(images: Array<string>): Array<JSX.Element> {
    return images.map(i => {
      return <div
        className={s.segment}
        key={i}
        onMouseEnter={() => {
          setCurrentImage(i)
        }}
        onTouchMove={e => {
          const coords = e.changedTouches[0].clientX - (controlRef.current! as HTMLDivElement).getBoundingClientRect().x
          const width = (imageRef.current! as HTMLImageElement).getBoundingClientRect().width / props.src.length
          const selected = Math.floor(coords / width)
          if (selected > props.src.length - 1)
            setCurrentImage(props.src[props.src.length - 1])
          else if (selected < 0)
            setCurrentImage(props.src[0])
          else
            setCurrentImage(props.src[selected])
        }}
      />
    })
  }

  return (
    <>
      <div ref={controlRef} className={s.control}>
        {createSegments(props.src)}
      </div>
      <Image ref={imageRef} src={currentImage} alt={props.alt} fill sizes='550px' />
    </>
  )
}

type ScrollableImageProps = {
  src: Array<string>
  alt: string
}
