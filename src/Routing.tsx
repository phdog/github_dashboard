import { Routes, Route, Navigate } from 'react-router-dom'
import { Search } from 'pages/Search'
import { Profile } from 'pages/Profile'
import { NotFound } from 'pages/NotFound'
import { NavBar } from 'components/NavBar'


const Routing = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/profile/:username/' element={<Profile />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/404' />} />
        </Routes>
      </div>
    </>
  )
}

export default Routing