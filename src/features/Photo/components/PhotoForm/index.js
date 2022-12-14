import PhotoCategories from "constant/categories";
import { useState } from "react";

import Select from "react-select";
import "./PhotoForm.scss";

const PhotoForm = ({ onSubmit, isAddMode, updatePhoto }) => {
  const [title, setTitle] = useState(updatePhoto ? updatePhoto.title : "");
  const [category, setCategory] = useState(
    updatePhoto ? updatePhoto.category : null
  );
  const [randomPhoto, setRandomPhoto] = useState(
    updatePhoto ? updatePhoto.photo : "https://picsum.photos/200/300?random=1"
  );

  const handleRandomPhoto = () => {
    const randomIndex = Math.ceil(Math.random() * 1000);
    setRandomPhoto(`https://picsum.photos/200/300?random=${randomIndex}`);
  };

  return (
    <div className="photo-form-wrapper">
      <div className="photo-form">
        <label htmlFor="titleId" className="photo-form-label">
          Title
        </label>
        <input
          name="title"
          id="titleId"
          placeholder="Eg: Wow nature..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="categoryId" className="photo-form-label">
          Category
        </label>
        <Select
          name="category"
          id="categoryId"
          placeholder="What's your photo category"
          options={PhotoCategories}
          defaultValue={category}
          onChange={setCategory}
        />
        <label className="photo-form-label">Photo</label>
        <button className="btn" onClick={handleRandomPhoto}>
          Random a photo
        </button>
        <img className="photo-preview" src={randomPhoto} alt="selected" />
        <button
          className="btn"
          onClick={() => {
            setTitle("");
            onSubmit(title, category, randomPhoto, isAddMode, updatePhoto);
          }}
        >
          {isAddMode ? "Add to album" : "Update"}
        </button>
      </div>
    </div>
  );
};
export default PhotoForm;
