import React,{useEffect} from 'react';

import {fetchAvailability } from "../../../features/Doctors/DoctorAvailability"
import { useSelector,useDispatch } from 'react-redux';


const DefaultPage = () => {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.account.userData.data);
  
  useEffect(()=>{
     if(id){
       dispatch(fetchAvailability(id))
     }
  },[dispatch])

  return (
    <div className="p-4  lg:flex lg:space-x-6">
    
      <div className="bg-white p-6 rounded-md shadow-md lg:w-2/3">
        <div className="flex justify-between ">
          <span className="font-bold">Jun 2024</span>
          {/* <span className="font-bold">Monday to Sunday</span> */}
        </div>
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="border p-2">Mon</th>
              <th className="border p-2">Tue</th>
              <th className="border p-2">Wed</th>
              <th className="border p-2">Thu</th>
              <th className="border p-2">Fri</th>
              <th className="border p-2">Sat</th>
              <th className="border p-2">Sun</th>
            </tr>
          </thead>
          <tbody>
         
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">3</td>
              <td className="border p-2">4</td>
              <td className="border p-2">5</td>
              <td className="border p-2">6</td>
              <td className="border p-2">7</td>
            </tr>
          
          </tbody>
        </table>
      </div>

     
      <div className="bg-white p-6 rounded-md shadow-md lg:w-1/3">
        <h2 className="font-bold text-lg mb-4">Upcoming Events</h2>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Today</h3>
          {/* Event Component */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <p className="font-bold text-black mb-2">sit at bench 1 </p>
            <div className="flex justify-between text-gray-700">
              <span>10:00pm</span>
              <span>Nov 10, 2020</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Tomorrow</h3>
         
          <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <p className="font-bold text-black mb-2">attend therspy session

            </p>
            <div className="flex justify-between text-gray-700">
              <span>10:00pm</span>
              <span>Nov 11, 2020</span>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default DefaultPage;
