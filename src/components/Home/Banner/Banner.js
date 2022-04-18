import React from 'react';
import { Button } from "../Button/Button";
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container mb-5'>
        <video className="" src='https://vod-progressive.akamaized.net/exp=1650210565~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2229%2F19%2F486147545%2F2177951295.mp4~hmac=62bdfd7d34b94d01f268f704023ed43d9402d7992720d5349c5ed635fa355d5c/vimeo-prod-skyfire-std-us/01/2229/19/486147545/2177951295.mp4?filename=Boy+-+57753.mp4' autoPlay loop />
        <h3 className='mt-5 fw-bold'>READ MORE BOOKS</h3>
        <h4 className='mt-2 fw-bold'>GAIN MORE KNOWLEDGE</h4>

        <div className='banner-button'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Registration
          </Button>
        </div>
      </div>
    );
};

export default Banner;