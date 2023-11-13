import Footer from '@/components/Footer'

import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
