import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { DataEdit } from './Components/DataEdit';
import { DataSignup } from './Components/DataSignup';
import { ViewData } from './Components/ViewData';
import { UserDetails } from './Components/UserDetails';
import ProductServices from './Components/NestedRoutes/ProductServices';

function App() {

  return(
    <>
<ul style={{marginLeft:"5px"}}>
<li style={{fontWeight:"bold", fontSize:"23px"}}><Link  to={`/`}>Home</Link></li>
<li style={{fontWeight:"bold", fontSize:"23px"}}><Link to={`/blog`}>Blog</Link></li>
<li style={{fontWeight:"bold", fontSize:"23px"}}><Link to={`/community`}>Community</Link></li>

    <li style={{fontWeight:"bold", fontSize:"23px"}}><Link to={`/user-details`} > User Details</Link></li>
    <li style={{fontWeight:"bold", fontSize:"23px"}}><Link to={`/data-signup`} > User signup</Link></li>
    <li style={{fontWeight:"bold", fontSize:"23px"}}><Link to={`/product-services`} > ProductServices</Link></li>


</ul>
<hr className='bg-danger' style={{height:"3px"}}/>

    <Routes>

      <Route path="/user-details" element={<UserDetails />} />

    {/* <View /> with router parameter  */}
    <Route  path="/user-details/view/:idno" element= {<ViewData />} />

    {/* <Edit /> with router parameter  */}
    <Route  path="/user-details/edit/:idno" element= {<DataEdit />} />

    {/* <Signup /> with router parameter  */}
    <Route path="/data-signup" element= {<DataSignup />} />
    <Route path="/product-services/*" element= {<ProductServices />} />

      </Routes>
    </>
  )
  
  
}

export default App;
