import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getUserData } from '../../features/auth/account'
export const useFetchUserData = async ()=>{
   const dispatch = useDispatch()
 
   useEffect(() => {
      const checkUserStatus = async () => {
        const storedId = localStorage.getItem('identifier');
        if (storedId) {
          const parsedId = JSON.parse(storedId);
          await dispatch(getUserData({ id: parsedId.id }));
        }
      };
  
      checkUserStatus();
    }, [dispatch,]);


}