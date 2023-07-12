'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Image src={rightIcon} width={20} height={20} alt="right icon" />
      )}
    </button>
  );
};

export default CustomButton;
