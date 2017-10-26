import React from 'react';
import MotionMenu from 'react-motion-menu';

 const ClickMenu = () => (

  <header className=" fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">

  
  
  <div className="dtc w-25 tr" style={{width:'0%'}}>
  <MotionMenu
  type="vertical"
  margin={50}
>
  <div className="button">
    <i className="fa fa-bars" />
  </div>
  <div className="button">
    <i className="fa fa-cogs" />
  </div>
  <div className="button">
    <i className="fa fa-cloud" />
  </div>
  <div className="button">
    <i className="fa fa-home" />
  </div>
</MotionMenu>
  </div>

</header>
  
);

export default ClickMenu; 