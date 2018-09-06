import React from 'react';
import spinner from './spinner.gif';


export const Spinner= () => {
  return (
    <div>
      <img src={spinner} alt="Loading........"
      style={{ width:'200' , margin:'40 auto'  ,display:'block'   }}
      
      />
    </div>
  )
}


export default Spinner;