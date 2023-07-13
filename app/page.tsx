import { CarCard, LandingPage, SearchBar } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, No cars available!
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
