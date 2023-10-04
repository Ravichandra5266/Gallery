import "./index.css";

const GalleryItem = (props) => {
  const { each, activeBtn, onChangeImage } = props;
  const { id, thumbnailUrl, thumbnailAltText } = each;
  const customeStyleBtn = activeBtn ? "active" : "inActive";
  const onclickImage = () => {
    onChangeImage(id);
  };
  return (
    <li>
      <button
        type="button"
        className={`thumb-btn ${customeStyleBtn}`}
        onClick={onclickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  );
};
export default GalleryItem;
