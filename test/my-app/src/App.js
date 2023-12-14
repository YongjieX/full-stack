import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import React from 'react';
import { useFormik } from 'formik';
function MySwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* ... additional slides */}
    </Swiper>
  );
}



function App() {
  return (
    <div className="App">
      <MySwiperComponent />
    </div>
  );
}

export default App;
