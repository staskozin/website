import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import s from './ScrollableImage.module.css'


export default function ScrollableImage(props: ScrollableImageProps) {
  const [currentImage, setCurrentImage] = useState(props.src[0])
  const controlRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (props.perspective) {
      wrapRef.current!.addEventListener('mousemove', handleMove)
      wrapRef.current!.addEventListener('touchmove', handleMobileMove)
      wrapRef.current!.addEventListener('mouseout', resetPerspective)
      wrapRef.current!.addEventListener('touchend', resetPerspective)
      wrapRef.current!.addEventListener('touchstart', setShadow)
      wrapRef.current!.addEventListener('mouseover', setShadow)
    }
  }, [props.perspective])

  function handleMove(e: MouseEvent) {
    const n = wrapRef.current!.getBoundingClientRect()
    const xVal = e.clientX - n.x
    const yVal = e.clientY - n.y
    const yRotation = 7 * ((xVal - imageRef.current!.clientWidth / 2) / imageRef.current!.clientWidth)
    const xRotation = -7 * ((yVal - imageRef.current!.clientHeight / 2) / imageRef.current!.clientHeight)
    const string = 'perspective(' + imageRef.current!.clientWidth + 'px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg) scale(1.02)'
    requestAnimationFrame(() => {
      imageRef.current!.style.transform = string
    })
  }

  function handleMobileMove(e: TouchEvent) {
    const n = wrapRef.current!.getBoundingClientRect()
    const xVal = e.changedTouches[0].clientX - n.x
    const yVal = e.changedTouches[0].clientY - n.y
    const yRotation = 10 * ((xVal - imageRef.current!.clientWidth / 2) / imageRef.current!.clientWidth)
    const xRotation = -10 * ((yVal - imageRef.current!.clientHeight / 2) / imageRef.current!.clientHeight)
    const string = 'perspective(' + imageRef.current!.clientWidth + 'px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg) scale(1.02)'
    requestAnimationFrame(() => {
      imageRef.current!.style.transform = string
    })
  }

  function resetPerspective() {
    imageRef.current!.style.transform = 'perspective(' + imageRef.current!.clientWidth + 'px) scale(1) rotateX(0) rotateY(0)'
    imageRef.current!.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 2px 6px, rgba(0, 0, 0, 0.23) 0px 2px 6px'
  }

  function setShadow() {
    imageRef.current!.style.boxShadow = 'rgba(50, 50, 93, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.35) 0px 8px 16px -8px'
  }

  function createSegments(images: Array<string>): Array<JSX.Element> {
    return images.map(i => {
      return <div
        className={s.segment}
        key={i}
        onMouseEnter={() => {
          setCurrentImage(i)
        }}
        onTouchMove={e => {
          const coords = e.changedTouches[0].clientX - controlRef.current!.getBoundingClientRect().x
          const width = imageRef.current!.getBoundingClientRect().width / props.src.length
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

  let className = ''
  if (props.perspective)
    className += `${s.perspective} `
  if (props.rounded)
    className += `${s.rounded} `

  return (
    <div ref={wrapRef}>
      <div ref={controlRef} className={s.control}>
        {createSegments(props.src)}
      </div>
      <Image className={className} ref={imageRef} src={currentImage} alt={props.alt} fill sizes='550px' />
    </div>
  )
}

type ScrollableImageProps = {
  src: Array<string>
  alt: string
  perspective?: boolean
  rounded?: boolean
}
