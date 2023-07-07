'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

function LandingPage() {
  const handleBtnClick = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find or Rent a car - Effortlessly!</h1>

        <p className="hero__subtitle">
          Streamline your automobile showroom experience
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleBtnClick}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="landing page image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default LandingPage;
