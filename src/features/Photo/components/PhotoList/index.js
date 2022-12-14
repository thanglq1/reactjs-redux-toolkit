import PhotoCard from "../PhotoCard";
import "./PhotoList.scss";

const PhotoList = ({ photos, onEdit, onDelete }) => {
  return (
    <div className="photo-list">
      {photos.map((item) => {
        const { id, title, photo } = item;
        return (
          <PhotoCard
            key={id}
            id={id}
            title={title}
            photoUrl={photo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default PhotoList;
