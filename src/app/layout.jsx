import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'EffiGenius',
  description: 'Better way to organize and manage your tasks and time',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;