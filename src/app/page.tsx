import Header from '@/components/Header'
import ProjectList from '@/components/ProjectList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Станислав Козин. Веб-разработчик и дизайнер',
  description: 'Сайт-портфолио фронтенд-разработчика',
}

export default function Home() {
  return (
    <>
      <Header title='Веб-разработчик' />
      <ProjectList />
    </>
  )
}
