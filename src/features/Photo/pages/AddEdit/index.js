import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, editPhoto } from "features/Photo/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AddEditPhoto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const photos = useSelector((state) => state.photos);
  let photoWillUpdate;
  if (photoId) {
    photoWillUpdate = photos.find(
      (photo) => photo.id.toString() === photoId.toString()
    );
  }

  const handleSubmit = (
    title,
    category,
    randomPhoto,
    isAddMode,
    updatePhoto
  ) => {
    const payload = { title, category, photo: randomPhoto, id: Date.now() };
    if (isAddMode) {
      const action = addPhoto(payload);
      dispatch(action);
    } else {
      payload.id = updatePhoto.id;
      const action = editPhoto(payload);
      dispatch(action);
    }
    navigate("/photos");
  };
  return (
    <div className="photo-add-edit">
      <Banner title="Pick your amazing photo 😎" />
      <PhotoForm
        onSubmit={handleSubmit}
        isAddMode={isAddMode}
        updatePhoto={photoWillUpdate}
      />
    </div>
  );
};
export default AddEditPhoto;
