import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography dir='rtl' color='#FF2625' fontWeight='600' fontSize='26px'>
        <b style={{ fontSize: '60px' }}>باشگاه طلوع</b>
      </Typography>
      <Typography
        dir='rtl'
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb='23px'
        mt='30px'
      >
        تمیرن , استراحت <br />
        <b>تکرار</b>
      </Typography>
      <Typography
        dir='rtl'
        fontSize='22px'
        fontFamily='Alegreya'
        lineHeight='35px'
      >
        بهترین تمرین هارو متناسب با بدنت انتخاب کن ❤😍
      </Typography>
      <Stack dir='rtl'>
        <a
          href='#exercises'
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          جست و جو تمرینات{' '}
         </a>
      </Stack>
      <Typography
        dir='rtl'
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: '200px',
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt='hero-banner'
        className='hero-banner-img'
      />
    </Box>
  );
};

export default HeroBanner;
