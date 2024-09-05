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
          src={"/img/project/rice.jpg"}
          width={550}
          height={413}
          numberOfImages={5}
          perspective
          rounded
        />}
      />

      <Project
        href="https://salon-kartin.ru"
        text="Сайт салона картин на&nbsp;Южной"
        view={<ScrollableImage
          src={"/img/project/salon.jpg"}
          width={550}
          height={464}
          numberOfImages={4}
          perspective
        />}
      />

      <Project
        href="https://avorio.biz"
        text="Сайт компании Авориоматикс"
        view={<ScrollableImage
          src={"/img/project/avorio.jpg"}
          width={550}
          height={623}
          numberOfImages={4}
        />}
      />

      <Project
        href="https://github.com/staskozin/url-apps"
        text="Приложения, умещающиеся в&nbsp;адресной строке"
        view={<ScrollableImage
          src={"/img/project/url-apps.png"}
          width={518}
          height={192}
          numberOfImages={42}
          perRow={4}
        />}
      />

      <Project
        href="https://3dphoto.staskozin.ru"
        text="Сайт фотостудии Превращение"
        view={<ScrollableImage
          src={"/img/project/3dphoto.jpg"}
          width={550}
          height={904}
          numberOfImages={48}
          perRow={8}
        />}
      />

      <Project
        href="https://profkoptilnya.ru/constructor"
        text="Конструктор коптилен"
        view={<ScrollableImage
          src={"/img/project/smoker.jpg"}
          width={550}
          height={391}
          numberOfImages={5}
        />}
      />

      <Project
        href="https://stolpodnos.ru/constructor"
        text="Конструктор столиков для&nbsp;завтрака в&nbsp;постель"
        view={<ScrollableImage
          src={"/img/project/table.jpg"}
          width={550}
          height={465}
          numberOfImages={4}
        />}
      />
    </Masonry>
  )
}
