'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Project from '@/components/Project'


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
        view={<Image src="/img/project/rice.jpg" alt="" fill />}
      />

      <Project
        href="https://salon-kartin.ru"
        text="Сайт салона картин на&nbsp;Южной"
        view={<Image src="/img/project/salon/1.jpg" alt="" fill />}
      />

      <Project
        href="https://avorio.biz"
        text="Сайт компании Авориоматикс"
        view={<Image src="/img/project/avorio.jpg" alt="" fill />}
      />

      <Project
        href="https://profkoptilnya.ru/constructor"
        text="Конструктор коптилен"
        view={<Image src="/img/project/smoker/1.jpg" alt="" fill />}
      />

      <Project
        href="https://stolpodnos.ru/constructor"
        text="Конструктор столиков для&nbsp;завтрака в&nbsp;постель"
        view={<Image src="/img/project/table/1.jpg" alt="" fill />}
      />
    </Masonry>
  )
}
