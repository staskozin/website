import Script from 'next/script'
import Footer from '@/components/Footer'

import './globals.css'
import YandexMetrika from '@/components/YandexMetrika'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(96411226, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
              });`}
        </Script>
        <YandexMetrika />
        <div className="container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
