import { Route, Routes } from 'react-router-dom'
import { Home_screen, notFound_screen } from './Screens';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home_screen />}/>

        <Route path='*' element={<notFound_screen />} />
    </Routes>
  )
}
