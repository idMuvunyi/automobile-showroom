'use client';

import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const router = useRouter();

  // Search button component
  const SearchButton = ({ btnStyles }: { btnStyles: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${btnStyles}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-container"
      />
    </button>
  );
  // create handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      return alert('Please fill aleast one field to search!');
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const currentSearchParams = new URLSearchParams(window.location.search);

    // if model is provided in search then set it in url for netxjs to make serverside query
    if (model) {
      currentSearchParams.set('model', model);
    } else {
      // if no model is provide during current search then delete previous one
      currentSearchParams.delete('model');
    }

    // if make is provided in search then set it in url for nextjs to make serverside query
    if (manufacturer) {
      currentSearchParams.set('manufacturer', manufacturer);
    } else {
      // if no make is provide during current search then delete previous one
      currentSearchParams.delete('manufacturer');
    }

    // create new pathname
    const newPathName = `${
      window.location.pathname
    }?${currentSearchParams.toString()}`;
    // route new pathname
    router.push(newPathName);
  };

  return (
    <form className="searchBar flex" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton btnStyles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model-search-icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tucson"
          className="searchbar__input"
        />
        <SearchButton btnStyles="sm:hidden" />
      </div>
      <SearchButton btnStyles="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
