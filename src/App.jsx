import './App.css'
import Nav from './components/nav/nav'
import Body from './Body'

const MOCK_API = 'https://650b56c0dfd73d1fab09e81f.mockapi.io/link/v1/'

function App() {
  return (
    <div className='bg-lightGrey w-full h-auto p-12 rounded-xl'>
      <Nav/>
      <Body/>
    </div>
  )
}

export default App
