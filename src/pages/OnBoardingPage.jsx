import React from 'react'
import CustomCardComponent from '../components/card/CustomCard'
import vector from '../assets/vector.svg'
import vector1 from '../assets/vector1.svg'
import header from '../assets/header.svg'
import useResponsiveStyles from '../utils/MediaQuery'
import OnBoardingCard from '../components/card/OnBoardingCard'


const OnBoardingPage = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{ backgroundColor: '#E5E4FF', height: '100vh', width: '100vw', background: 'linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%, #F8F5F6 100%)', position: 'relative' }}>
  <div style={{ position: 'absolute', left: '0', bottom: '0' }}>
    <img src={vector} alt="vector1" width={(responsive.isMobile)?'50%':'100%'}/>
  </div>
  <div style={{ position: 'absolute', right: '0', top: '0'}}>
    {
      (!responsive.isMobile)
      ?
      <img src={vector1} alt="vector2" width={'100%'}/>
      :
      ''
    }
  </div>
  <div style={{ width: '100%', height: '10%'}}>
    <img src={header} width={(responsive.isMobile)?'80%':''}></img>
  </div>
  <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
    <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <OnBoardingCard variant="outlined"></OnBoardingCard>
    </div>
  </div>
</div>
  )
}

export default OnBoardingPage