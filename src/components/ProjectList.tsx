'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Project from '@/components/Project'
import ScrollableImage from '@/components/Image/ScrollableImage'


export default function Projects() {
  const breakpointColumnsObj = {
    default: 3,
    1023: 2,
    500: 1
  }
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='masonry'
      columnClassName='masonry__item'
    >
      <Project
        href="/rice-calculator"
        text="Как варить рис"
        view={<ScrollableImage
          src={[
            "/img/project/rice/1.jpg",
            "/img/project/rice/2.jpg",
            "/img/project/rice/3.jpg",
            "/img/project/rice/4.jpg",
            "/img/project/rice/5.jpg"
          ]}
          alt="Как варить рис"
          perspective
          rounded
        />}
      />

      <Project
        href="https://salon-kartin.ru"
        text="Сайт салона картин на&nbsp;Южной"
        view={<ScrollableImage
          src={[
            "/img/project/salon/1.jpg",
            "/img/project/salon/2.jpg",
            "/img/project/salon/3.jpg",
            "/img/project/salon/4.jpg"
          ]}
          alt="Картина"
          perspective
        />}
      />

      <Project
        href="https://avorio.biz"
        text="Сайт компании Авориоматикс"
        view={<ScrollableImage
          src={[
            "/img/project/avorio/1.jpg",
            "/img/project/avorio/2.jpg",
            "/img/project/avorio/3.jpg",
            "/img/project/avorio/4.jpg"
          ]}
          alt="Аворио"
        />}
      />

      <Project
        href="https://profkoptilnya.ru/constructor"
        text="Конструктор коптилен"
        view={<ScrollableImage
          src={[
            "/img/project/smoker/1.jpg",
            "/img/project/smoker/2.jpg",
            "/img/project/smoker/3.jpg",
            "/img/project/smoker/4.jpg",
            "/img/project/smoker/5.jpg"
          ]}
          alt="Коптильня"
        />}
      />

      <Project
        href="https://stolpodnos.ru/constructor"
        text="Конструктор столиков для&nbsp;завтрака в&nbsp;постель"
        view={<ScrollableImage
          src={[
            "/img/project/table/1.jpg",
            "/img/project/table/2.jpg",
            "/img/project/table/3.jpg",
            "/img/project/table/4.jpg"
          ]}
          alt="Столик для завтрака в постель"
        />}
      />
    </Masonry>
  )
}
