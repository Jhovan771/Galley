import React, { useState } from "react";

const Box2 = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));
    e.target.value = null;
  };

  const removeImage = (image) => {
    setSelectedImages(selectedImages.filter((img) => img !== image));
  };

  return (
    <div>
      <h3 className='text-lg mb-4'>Upload Photos</h3>

      {/* Label Input */}
      <div className='mb-4'>
        <h3>Label</h3>
        <input
          type='text'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className='w-full p-2 rounded border-2 border-gray-500 outline-none focus:outline focus:outline-2 focus:outline-blue-500'
        />
      </div>

      {/* Description Input */}
      <div className='mb-4'>
        <h3>Description</h3>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full p-2 rounded border-2 border-gray-500 outline-none focus:outline focus:outline-2 focus:outline-blue-500'
        />
      </div>

      {/* Image File Input */}
      <div className='flex mb-4'>
        <h3>Select Images</h3>
        <input
          type='file'
          multiple
          onChange={handleImageChange}
          className='w-full p-2 rounded border-2 border-gray-500 outline-none focus:outline focus:outline-2 focus:outline-blue-500'
        />
      </div>

      {/* Image Preview */}
      {selectedImages.length > 0 && (
        <div className='mb-4 grid grid-cols-2 gap-4 overflow-y-auto'>
          {selectedImages.map((image, index) => (
            <div key={index} className='relative'>
              <img
                src={image}
                alt={`Selected ${index + 1}`}
                className='w-full h-40 object-cover rounded'
              />
              <button
                onClick={() => removeImage(image)}
                className='absolute top-1 right-1 bg-red-500 rounded-full p-1 hover:bg-red-600'>
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <button className='bg-blue-800 text-white p-2 rounded w-full hover:bg-blue-600 duration-300'>
        Upload
      </button>
    </div>
  );
};

export default Box2;
