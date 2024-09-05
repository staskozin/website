import { useEffect, useRef } from 'react'

import s from './ScrollableImage.module.css'


export default function ScrollableImage(props: ScrollableImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function updateBackgroundSize() {
      if (imageRef.current === null) return
      if (props.perRow === undefined)
        imageRef.current!.style.backgroundSize = `${wrapRef.current!.clientWidth * props.numberOfImages}px ${wrapRef.current!.clientHeight}px`
      else
        imageRef.current!.style.backgroundSize = `${wrapRef.current!.clientWidth * props.perRow}px ${wrapRef.current!.clientHeight * Math.ceil(props.numberOfImages / props.perRow)}px`
    }
    const img = new window.Image()
    img.onload = updateBackgroundSize
    img.src = props.src
    window.addEventListener('resize', updateBackgroundSize)
    screen.orientation.addEventListener("change", updateBackgroundSize)
  }, [props.numberOfImages, props.src, props.perRow])

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
      let selected = Math.trunc(xVal / (wrapRef.current!.clientWidth / props.numberOfImages))
      selected = Math.min(Math.max(selected, 0), props.numberOfImages - 1) // clamp
      if (props.perRow === undefined)
        imageRef.current!.style.backgroundPositionX = `${selected / (props.numberOfImages - 1) * 100}%`
      else
        imageRef.current!.style.backgroundPosition = `${(selected % props.perRow) / (props.perRow - 1) * 100}% ${Math.floor(selected / props.perRow) / (Math.ceil(props.numberOfImages / props.perRow) - 1) * 100}%`
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
  }, [props.perspective, props.numberOfImages, props.perRow])

  let className = `${s.image} `
  if (props.perspective)
    className += `${s.perspective} `
  if (props.rounded)
    className += `${s.rounded} `

  return (
    <div ref={wrapRef}>
      <div className={className} ref={imageRef} style={{ backgroundImage: `url(${props.src})`, aspectRatio: props.width / props.height }}></div>
    </div>
  )
}

type ScrollableImageProps = {
  src: string
  width: number
  height: number
  numberOfImages: number
  perRow?: number
  perspective?: boolean
  rounded?: boolean
}
