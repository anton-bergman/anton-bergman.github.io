import "./ImageCard.scss";

interface ImageCardProps {
  imageSrc: string;
  placeOfImage: string;
  imageContainerWidth: string;
  imageWidth: string;
  imageBottomMargin: string;
}

function ImageCard({
  imageSrc,
  placeOfImage,
  imageContainerWidth,
  imageWidth,
  imageBottomMargin,
}: ImageCardProps) {
  return (
    <div className="imageContainer" style={{ width: imageContainerWidth }}>
      <div className="toasterContainer">
        <p className="placeOfImage">{placeOfImage}</p>
      </div>
      <img
        className="image"
        src={imageSrc}
        alt="Beautiful environment."
        style={{ width: imageWidth, marginBottom: imageBottomMargin }}
      />
    </div>
  );
}

export default ImageCard;
