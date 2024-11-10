import React, { useState } from "react";
import { saveStudentProfileAndImages } from "./services/studentService";

const Input = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [studentData, setStudentData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    sex: "",
    age: "",
    status: "",
    street: "",
    barangay: "",
    city: "",
    province: "",
    postalCode: "",
    contactNumber: "",
    parentName: "",
    program: "",
    yearLevel: "",
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));

    setSelectedImages((prevImages) => prevImages.concat(files));
    setImagePreviews((prevPreviews) => prevPreviews.concat(fileUrls));
    e.target.value = null;
  };

  const [imagePreviews, setImagePreviews] = useState([]);

  const removeImage = (image) => {
    setSelectedImages(selectedImages.filter((img) => img !== image));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();

    formData.append("firstName", studentData.firstName);
    formData.append("middleInitial", studentData.middleInitial);
    formData.append("lastName", studentData.lastName);
    formData.append("sex", studentData.sex);
    formData.append("age", studentData.age);
    formData.append("status", studentData.status);
    formData.append("street", studentData.street);
    formData.append("barangay", studentData.barangay);
    formData.append("city", studentData.city);
    formData.append("province", studentData.province);
    formData.append("postalCode", studentData.postalCode);
    formData.append("contactNumber", studentData.contactNumber);
    formData.append("parentName", studentData.parentName);
    formData.append("program", studentData.program);
    formData.append("yearLevel", studentData.yearLevel);
    formData.append("label", label);
    formData.append("description", description);

    if (Array.isArray(selectedImages) && selectedImages.length > 0) {
      selectedImages.forEach((image) => {
        formData.append("images", image);
      });
    } else {
      console.error("Selected images are not an array or are empty");
      return;
    }

    try {
      const response = await saveStudentProfileAndImages(formData);
      console.log("Save successful:", response);

      setStudentData({
        firstName: "",
        middleInitial: "",
        lastName: "",
        sex: "",
        age: "",
        status: "",
        street: "",
        barangay: "",
        city: "",
        province: "",
        postalCode: "",
        contactNumber: "",
        parentName: "",
        program: "",
        yearLevel: "",
      });
      setLabel("");
      setDescription("");
      setSelectedImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div>
      <h3 className='border-b border-[#005582]'>Student Profile</h3>

      {/* Name Section */}
      <div className='grid grid-cols-2 gap-2 py-2 w-full'>
        <div>
          <h3>First Name :</h3>
          <input
            name='firstName'
            value={studentData.firstName}
            onChange={handleInputChange}
            className='p-1 capitalize border border-[#005582] rounded-sm w-full'
            type='text'
            autoComplete='off'
          />
        </div>
        <div>
          <h3>MI :</h3>
          <input
            name='middleInitial'
            value={studentData.middleInitial}
            onChange={handleInputChange}
            className='p-1 capitalize border border-[#005582] rounded-sm w-full'
            type='text'
            autoComplete='off'
          />
        </div>
        <div>
          <h3>Last Name :</h3>
          <input
            name='lastName'
            value={studentData.lastName}
            onChange={handleInputChange}
            className='p-1 capitalize border border-[#005582] rounded-sm w-full'
            type='text'
            autoComplete='off'
          />
        </div>

        {/* Sex and Age Section */}
        <div className='flex justify-start items-start gap-2 flex-col'>
          <select
            name='sex'
            value={studentData.sex}
            onChange={handleInputChange}
            className='h-[32px] w-full text-center border border-[#005582] rounded text-[#005582]'>
            <option value=''>Sex</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          <div className='flex justify-center gap-2 w-full'>
            <h3 className='flex justify-center items-center'>Age:</h3>
            <input
              name='age'
              value={studentData.age}
              onChange={handleInputChange}
              className='w-40 p-1 capitalize border border-[#005582] rounded-sm text-center'
              type='number'
              autoComplete='off'
            />
          </div>
        </div>
      </div>
      <select
        name='status'
        value={studentData.status}
        onChange={handleInputChange}
        className='h-[32px] w-full text-center border border-[#005582] rounded text-[#005582]'>
        <option value=''>Status</option>
        <option value='Active'>Active</option>
        <option value='Inactive'>Inactive</option>
        <option value='Graduated'>Graduated</option>
      </select>
      <h3>Contact Number :</h3>
      <input
        name='contactNumber'
        value={studentData.contactNumber}
        onChange={handleInputChange}
        className='p-1 capitalize border border-[#005582] rounded-sm w-full'
        type='number'
        autoComplete='off'
      />

      {/* Address Section */}
      <div>
        <h3 className='border-b border-[#005582]'>Address</h3>
        <h3>Street / Building # :</h3>
        <input
          name='street'
          value={studentData.street}
          onChange={handleInputChange}
          className='p-1 capitalize border border-[#005582] rounded-sm w-full'
          type='text'
          autoComplete='off'
        />
        <h3>Barangay :</h3>
        <input
          name='barangay'
          value={studentData.barangay}
          onChange={handleInputChange}
          className='p-1 capitalize border border-[#005582] rounded-sm w-full'
          type='text'
          autoComplete='off'
        />
        <h3>City / Municipality :</h3>
        <input
          name='city'
          value={studentData.city}
          onChange={handleInputChange}
          className='p-1 capitalize border border-[#005582] rounded-sm w-full'
          type='text'
          autoComplete='off'
        />
        <h3>Province :</h3>
        <input
          name='province'
          value={studentData.province}
          onChange={handleInputChange}
          className='p-1 capitalize border border-[#005582] rounded-sm w-full'
          type='text'
          autoComplete='off'
        />
        <h3>Postal Code :</h3>
        <input
          name='postalCode'
          value={studentData.postalCode}
          onChange={handleInputChange}
          className='p-1 capitalize border border-[#005582] rounded-sm w-full'
          type='number'
          autoComplete='off'
        />
      </div>
      <h3>Parent / Guardian :</h3>
      <input
        name='parentName'
        value={studentData.parentName}
        onChange={handleInputChange}
        className='p-1 capitalize border border-[#005582] rounded-sm w-full'
        type='text'
        autoComplete='off'
      />
      <h3>Program :</h3>
      <input
        name='program'
        value={studentData.program}
        onChange={handleInputChange}
        className='p-1 capitalize border border-[#005582] rounded-sm w-full'
        type='text'
        autoComplete='off'
      />
      <select
        name='yearLevel'
        value={studentData.yearLevel}
        onChange={handleInputChange}
        className='h-[32px] my-2 w-full text-center border border-[#005582] rounded text-[#005582]'>
        <option value=''>Year Level</option>
        <option value='1st Year'>1st Year</option>
        <option value='2nd Year'>2nd Year</option>
        <option value='3rd Year'>3rd Year</option>
        <option value='4th Year'>4th Year</option>
      </select>

      {/* Image Upload Section */}
      <h3 className='text-lg mb-4 mt-6'>Upload Photos</h3>

      {/* Label and Description Input */}
      <div className='mb-4'>
        <h3>Label</h3>
        <input
          autoComplete='off'
          type='text'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className='w-full p-2 rounded border-2 border-gray-500 outline-none focus:outline focus:outline-2 focus:outline-blue-500'
        />
      </div>

      <div className='mb-4'>
        <h3>Description</h3>
        <input
          autoComplete='off'
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
          autoComplete='off'
          type='file'
          multiple
          onChange={handleImageChange}
          className='w-full p-2 rounded border-2 border-gray-500 outline-none focus:outline focus:outline-2 focus:outline-blue-500'
        />
      </div>

      {/* Image Preview */}
      {imagePreviews.length > 0 && (
        <div className='mb-4 grid grid-cols-2 gap-4 overflow-y-auto'>
          {imagePreviews.map((preview, index) => (
            <div key={index} className='relative'>
              <img
                src={preview}
                alt={`Selected ${index + 1}`}
                className='w-full h-40 object-cover rounded'
              />
              <button
                onClick={() => {
                  setImagePreviews(imagePreviews.filter((_, i) => i !== index));
                  setSelectedImages(
                    selectedImages.filter((_, i) => i !== index)
                  );
                }}
                className='absolute top-1 right-1 bg-red-500 rounded-full p-1 hover:bg-red-600'>
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Save Button */}
      <div className='flex justify-center items-center py-4'>
        <button
          className='bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600'
          onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Input;
