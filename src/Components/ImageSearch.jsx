import React, { useState } from 'react';

const ImageSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let noOfImageToBeLoaded = 9

  console.log(images)

  const handleSearch = () => {
    fetchImages(searchQuery, 9);
  };

  const handleRefresh = () => {
    setSearchQuery('');
    setImages([]);
  };

  const fetchImages = async (query, count) => {
    setIsLoading(true);
    let newImages = [];
    for (let i = 0; i < count; i++) {
      try {
        const response = await fetch(`https://source.unsplash.com/featured/1600x900/?${query}&${i}`);
        if (response.ok) {
          newImages.push(response.url);
        } else {
          console.error('Failed to fetch image:', response);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
    setIsLoading(false);
  };

  const handleImageClick = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-yellow-200 p-8">
      <div className="flex flex-col items-center">
        <h1 className="rounded-lg shadow-lg text-center font-display text-4xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 p-4">
          FunPhoto
        </h1>
        <div className="box bg-white rounded-lg border border-gray-400 p-8 w-96">
          <h2 className="font-display text-center text-xl pb-2">Search your favorite image</h2>
          <div className="flex items-center justify-center">
            <input
              type="text"
              id="searchbar"
              placeholder="enter text"
              className="h-10 w-60 text-center border border-gray-400 rounded-lg mr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="btn"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              className="btn ml-2"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="btn"
          onClick={() => handleSearch('Nature')}
        >
          Nature
        </button>
        <button
          type="button"
          className="btn ml-2"
          onClick={() => handleSearch('Animals')}
        >
          Animals
        </button>
        <button
          type="button"
          className="btn ml-2"
          onClick={() => handleSearch('religion')}
        >
          Spiritual
        </button>
        <button
          type="button"
          className="btn ml-2"
          onClick={() => handleSearch('Cities')}
        >
          Cities
        </button>
        <button
          type="button"
          className="btn ml-2"
          onClick={() => handleSearch('architecture')}
        >
          Architecture
        </button>
        <button
          type="button"
          className="btn ml-2"
          onClick={() => handleSearch('Scenery')}
        >
          Scenery
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="image border-2 border-orange-500 rounded-lg cursor-pointer hover:border-orange-700"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {enlargedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-red-500 text-lg font-bold"
              onClick={handleCloseEnlargedImage}
            >
              Close
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged Image"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
