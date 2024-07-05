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
        href="https://3dphoto.staskozin.ru"
        text="Сайт фотостудии Превращение"
        view={<ScrollableImage
          src={[
            "/img/project/3dphoto/1.jpg",
            "/img/project/3dphoto/2.jpg",
            "/img/project/3dphoto/3.jpg",
            "/img/project/3dphoto/4.jpg",
            "/img/project/3dphoto/5.jpg",
            "/img/project/3dphoto/6.jpg",
            "/img/project/3dphoto/7.jpg",
            "/img/project/3dphoto/8.jpg",
            "/img/project/3dphoto/9.jpg",
            "/img/project/3dphoto/10.jpg",
            "/img/project/3dphoto/11.jpg",
            "/img/project/3dphoto/12.jpg",
            "/img/project/3dphoto/13.jpg",
            "/img/project/3dphoto/14.jpg",
            "/img/project/3dphoto/15.jpg",
            "/img/project/3dphoto/16.jpg",
            "/img/project/3dphoto/17.jpg",
            "/img/project/3dphoto/18.jpg",
            "/img/project/3dphoto/19.jpg",
            "/img/project/3dphoto/20.jpg",
            "/img/project/3dphoto/21.jpg",
            "/img/project/3dphoto/22.jpg",
            "/img/project/3dphoto/23.jpg",
            "/img/project/3dphoto/24.jpg",
            "/img/project/3dphoto/25.jpg",
            "/img/project/3dphoto/26.jpg",
            "/img/project/3dphoto/27.jpg",
            "/img/project/3dphoto/28.jpg",
            "/img/project/3dphoto/29.jpg",
            "/img/project/3dphoto/30.jpg",
            "/img/project/3dphoto/31.jpg",
            "/img/project/3dphoto/32.jpg",
            "/img/project/3dphoto/33.jpg",
            "/img/project/3dphoto/34.jpg",
            "/img/project/3dphoto/35.jpg",
            "/img/project/3dphoto/36.jpg",
            "/img/project/3dphoto/37.jpg",
            "/img/project/3dphoto/38.jpg",
            "/img/project/3dphoto/39.jpg",
            "/img/project/3dphoto/40.jpg",
            "/img/project/3dphoto/41.jpg",
            "/img/project/3dphoto/42.jpg",
            "/img/project/3dphoto/43.jpg",
            "/img/project/3dphoto/44.jpg",
            "/img/project/3dphoto/45.jpg",
            "/img/project/3dphoto/46.jpg",
            "/img/project/3dphoto/47.jpg",
            "/img/project/3dphoto/48.jpg"
          ]}
          alt="Греческий трубач, сфотографированный в фотостудии «Превращение»"
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
