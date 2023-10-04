import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight:['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Create next and appwrite app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={roboto.className} style={roboto.style}>

        {children}
        </body>
    </html>
  )
}
