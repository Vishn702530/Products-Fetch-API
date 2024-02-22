import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
function Banner() {
  return (
    <div>
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img src='https://coolstuf.com.pg/wp-content/uploads/2021/06/apple-banner.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://www.alezay.com/wp-content/uploads/2023/03/SAMSUNG-GALAXY-S23-SERIES-MAIN-BANNER-ALEZAY-KUWAIT.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      
    </MDBCarousel>
    </div>
  )
}

export default Banner