import "./PhotoCard.scss";

const PhotoCard = ({ id, title, photoUrl, onEdit, onDelete }) => {
  return (
    <div className="photo-card">
      <img src={photoUrl} alt={title} className="photo-card-img" />
      <h3>{title}</h3>
      <div className="photo-btn-edit-delete">
        <button className="btn" onClick={() => onEdit(id)}>
          Edit
        </button>
        <button className="btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
