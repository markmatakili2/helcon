import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from './Doctor_profile'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

const HomePage = () => {
   const { isRegistered, data } = useSelector((state) => state.account.userData)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(() => {
      const identifier = localStorage.getItem('identifier')
      if (identifier) {
         const queryId = JSON.parse(identifier)
         dispatch(getUserData({ id: queryId.id }))
      }
   }, [dispatch])
   useEffect(() => {
      if (isRegistered && data) {
         navigate('/home')
      }
   }, [navigate, isRegistered, data])

   return (
      <div className=' overflow-x-hidden w-full'>
         <Header />
         <Banner />
         <ProfileCard />
         <Footer />

      </div>
   )

}

export default HomePage