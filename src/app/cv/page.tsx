import Header from '@/components/Header'
import Resume from '@/components/Resume'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Резюме Станислава Козина, веб-разработчика',
}

export default function Cv() {
  return (
    <>
      <Header title='Фронтенд-разработчик' />
      <Resume />
    </>
  )
}
