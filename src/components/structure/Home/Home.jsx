import React from 'react';
import CustomContainer from '../CustomContainer';
import useResponsiveStyles from '../../../utils/MediaQuery';
import header from '../../../assets/header.svg'
import hero from '../../../assets/hero.svg'
import { TextDescription } from '../../typography/Fields';
import { Outlet } from 'react-router-dom';





const Home = () => {
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
        <div style={{ height: '100%', width: '100vw', display:'flex',maxHeight:'862px', backgroundColor:''}}>
            <div style={{width:(!responsive.isMobile)?'50%':'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingLeft:(!responsive.isMobile)?'rem':''}}>
              <div style={{width:'90%', height:'80%', backgroundColor:''}}>
                <div style={{width:'100%', height:'20%', display:'flex',justifyContent:'flex-start'}}>
                <img src={header} width={'50%'} height={'50%'}></img>
                </div>
                <div style={{width:'100%', height:'70%'}}>
                   <Outlet/>
                </div>
              </div>
              <div style={{height:'10%', width:'90%', display:'flex', alignItems:'flex-end'}}>
                  <TextDescription responsive={responsive}>Copyright © 2023 QwikConnect. All rights reserved.</TextDescription>
              </div>
            </div>
            {
            (!responsive.isMobile)
            ?
            // padding:'0 1.38rem'
            <div style={{width:'50%'}}>
            <div style={{width:'90%', height:'90%', padding:'0 2rem', display:'flex', alignItems:'center'}}>
                    <img src={hero} alt='side image' width='100%' height='90%'></img>
            </div>
        </div>
        :
        ''
        }
    </div>
    </CustomContainer>
  )
}

export default Home
