import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
function App() {

  let router = useRoutes(routes)
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <SideBar />
        <div className='mt-[90px] ml-[300px]'>
          {router}
        </div>
      </div>
    </>
  )
}

export default App
