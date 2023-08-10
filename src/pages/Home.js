import React, { useEffect } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import LogoSection from '../components/LogoSection'
import NewsSection from '../components/NewsSection'
import EventSection from '../components/EventSection'
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../features/getUserSlice";
import FootLinks from '../components/FootLinks'


function Home() {
 
    const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => {
    // console.log("--state///", state);
    return state.userlist;
  });
console.log('err--',error)
  useEffect(() => {
    dispatch(getAllUser());
    // 
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error != null) {
    return <h3>{error}</h3>;
  }

// count
// context API never replaced ----- 
// redux   -----   

  return (
    <div>
            {users?.map((ele, ind) => {
       return <h2>{ele.name}</h2>;
      })}
          <ImageCarousel/>
    <LogoSection/>
    <NewsSection/>
    <EventSection/>
    <FootLinks/>
    </div>
  )
}

export default Home