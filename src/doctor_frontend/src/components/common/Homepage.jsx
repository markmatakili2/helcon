import ProfileCard from './Doctor_profile'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

const HomePage = () => {
  
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