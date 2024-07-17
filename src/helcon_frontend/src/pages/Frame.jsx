import image from '../../images/image_2.png'


const Frame = ()=>{
   return (
  <div className="relative z-50 flex justify-end mr-20 top-0">
  <div className="absolute top-0 right-28 mx-32   z-40">
    <div className="bg-white rounded-lg shadow-lg px-10">
      <h2 className="text-xl font-semibold mb-2 text-[#404040]">Well Qualified Doctors</h2>
      <p className="text-[#9D9D9D]">Treat with care</p>
    </div>
  </div>
  <div className="w-[420px] h-[420px] bg-white rounded-full relative px-4 border-[26px] border-[#E7E7E7]">
    <div className="m-6 absolute inset-0 rounded-full bg-gradient-to-r from-[#225364] to-[#002457]">
      <div className="relative w-[450px] h-full -top-40 right-14 z-50">
        <img src={image} alt="image of doctors" />
      </div>
    </div>
  </div>
  <div className="flex justify-between absolute top-28 z-50 space-x-20 "> 
    <div className="bg-white rounded-lg shadow-lg px-10">
      <h2 className="text-xl font-semibold mb-2 text-[#404040]">Book an Appointment</h2>
      <p className="text-[#9D9D9D]">Online appointment</p>
    </div>
    <div className="bg-gradient-to-r from-gray-400 to-white backdrop-blur-md rounded-lg shadow-md px-4">
      <h2 className="text-xl font-semibold mb-2 text-[#000000]">Contact Number</h2>
      <p className="text-[#000000]">+254799043088</p>
    </div>
  </div>
</div>
   )
}
export default Frame