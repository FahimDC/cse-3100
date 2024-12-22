import { useEffect, useState } from 'react';

// Adding more cats for each breed
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Peterbald' },
  // Add 5 more cats for each breed
  { name: 'Bella', age: '3', breed: 'Persian' },
  { name: 'Oliver', age: '1', breed: 'Persian' },
  { name: 'Milo', age: '4', breed: 'Siamese' },
  { name: 'Leo', age: '2', breed: 'Siamese' },
  { name: 'Max', age: '5', breed: 'Bengal' },
  { name: 'Nala', age: '3', breed: 'Bengal' },
  { name: 'Coco', age: '2', breed: 'Birman' },
  { name: 'Chloe', age: '1', breed: 'Birman' },
  { name: 'Zoe', age: '3', breed: 'Abyssinian' },
  { name: 'Oscar', age: '2', breed: 'Abyssinian' },
  { name: 'Charlie', age: '4', breed: 'Peterbald' },
  { name: 'Lily', age: '3', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filterBreed, setFilterBreed] = useState('');
  const [searchName, setSearchName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
        setLoading(false);  // Data is loaded, stop the loading state
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(
    (cat) =>
      (!filterBreed || cat.breed === filterBreed) &&
      (!searchName || cat.name.toLowerCase().includes(searchName.toLowerCase()))
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Loading State */}
      {loading && <p>Loading cats...</p>}

      {/* Filtering Options */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <select
          className="form-select w-auto"
          onChange={(e) => setFilterBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          <option value="Persian">Persian</option>
          <option value="Siamese">Siamese</option>
          <option value="Bengal">Bengal</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Peterbald">Peterbald</option>
        </select>

        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      {/* Cat Cards */}
      <div className="mt-4 row g-4 cats-container justify-content-center">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card border p-2">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2 zoom-effect"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  width: '200px',
                  objectFit: 'contain', // Ensures image fits within the box
                  margin: '0 auto',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
