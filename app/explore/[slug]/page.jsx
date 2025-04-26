import { notFound } from 'next/navigation';

export default async function CityPage({ params }) {
  const { slug } = params;
  
  const res = await fetch(`http://localhost:3001/api/cities?slug=${slug}`);
  if (!res.ok) return notFound();
  
  const city = await res.json();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{city.name} Street Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {city.foods.map((food) => (
          <FoodCard key={food._id} food={food} city={city} />
        ))}
      </div>
    </div>
  );
}