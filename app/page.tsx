import { CustomFilter, LandingPage, SearchBar } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <LandingPage />
      <div className="mt-12 padding-x padding-y max-width" id="explore">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Listing</h1>
          <p>Explore the vehicles you might be interested in!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
