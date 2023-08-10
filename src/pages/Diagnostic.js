import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../features/getPostSlice";
import { Typography, useTheme } from '@mui/material';




function Diagnostic() {
     const theme = useTheme();
    const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => {
    // console.log("--state///", state);
    return state.postslist;
  });
console.log('err--',error)
  useEffect(() => {
    dispatch(getAllPosts());
    // 
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error != null) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
            {posts?.map((ele, ind) => {
        return <div style={{
          background: theme.palette.primary.light
        }}>
          <Typography variant='h1'> 
            UserId: {ele.userId}

          </Typography>
          <Typography variant='body1'> 
            UserTitle: {ele.title}

          </Typography>
          <br/>Id: {ele.id}<br/><br/>Body: {ele.body}</div>
      ;
      })}
          
    </div>
  )
}

export default Diagnostic