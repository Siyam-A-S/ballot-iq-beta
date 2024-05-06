'use client';

import React, { useState, useEffect } from 'react';
import App  from './mph-sdk-integration-react/src/App';
import Home from './pg'
import Image from 'next/image';
// Default function
export default function CarouselDemo() {


  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1 }}>
          <div className = 'flex-center object-fill '>
          <App />
          </div>
        
        </div>
        <div style={{ flex: 2}}>
          <Home />
        </div>
      </div>
    </>
  );
}


