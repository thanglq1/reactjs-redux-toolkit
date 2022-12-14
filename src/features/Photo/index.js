import Banner from "components/Banner";
import Images from "constant/images";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import { deletePhoto } from "./photoSlice";

const Photo = () => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("photos:::", photos);
  const handleDelete = (id) => {
    const action = deletePhoto(id);
    dispatch(action);
  };

  const handleEdit = (id) => {
    navigate(`/photos/${id}`);
  };
  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.pinkBg} />
      <PhotoList photos={photos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};
export default Photo;
