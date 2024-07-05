import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import s from './ScrollableImage.module.css'


export default function ScrollableImage(props: ScrollableImageProps) {
  const [currentImage, setCurrentImage] = useState(props.src[0])
  const imageRef = useRef<HTMLImageElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMove(clientX: number, clientY: number, rotationModifier: number) {
      const n = wrapRef.current!.getBoundingClientRect()
      const xVal = clientX - n.x
      if (props.perspective) {
        const yVal = clientY - n.y
        const yRotation = rotationModifier * ((xVal - imageRef.current!.clientWidth / 2) / imageRef.current!.clientWidth)
        const xRotation = -rotationModifier * ((yVal - imageRef.current!.clientHeight / 2) / imageRef.current!.clientHeight)
        const styles = 'perspective(' + imageRef.current!.clientWidth + 'px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg) scale(1.02)'
        requestAnimationFrame(() => {
          imageRef.current!.style.transform = styles
          selectImage(xVal)
        })
      } else {
        requestAnimationFrame(() => {
          selectImage(xVal)
        })
      }
    }

    function selectImage(xVal: number) {
      const selected = Math.trunc(xVal / (imageRef.current!.clientWidth / props.src.length))
      if (selected > props.src.length - 1)
        setCurrentImage(props.src[props.src.length - 1])
      else if (selected < 0)
        setCurrentImage(props.src[0])
      else
        setCurrentImage(props.src[selected])
    }

    function resetPerspective() {
      imageRef.current!.style.transform = 'perspective(' + imageRef.current!.clientWidth + 'px) scale(1) rotateX(0) rotateY(0)'
      imageRef.current!.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 2px 6px, rgba(0, 0, 0, 0.23) 0px 2px 6px'
    }

    function setShadow() {
      imageRef.current!.style.boxShadow = 'rgba(50, 50, 93, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.35) 0px 8px 16px -8px'
    }

    wrapRef.current!.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY, 10))
    wrapRef.current!.addEventListener('touchmove', (e) => handleMove(e.changedTouches[0].clientX, e.changedTouches[0].clientY, 7))
    if (props.perspective) {
      wrapRef.current!.addEventListener('mouseout', resetPerspective)
      wrapRef.current!.addEventListener('touchend', resetPerspective)
      wrapRef.current!.addEventListener('touchstart', setShadow)
      wrapRef.current!.addEventListener('mouseover', setShadow)
    }
  }, [props.perspective, props.src])

  let className = ''
  if (props.perspective)
    className += `${s.perspective} `
  if (props.rounded)
    className += `${s.rounded} `

  return (
    <div ref={wrapRef}>
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
