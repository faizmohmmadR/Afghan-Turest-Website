import { useState } from "react";

const ImageWithShadow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyles = {
    transition: "box-shadow 0.3s ease-in-out",
    Opacity: isHovered ? 0.1 : "none",
    width: "150px",
    height: "150px",
  };

  const textOverlayStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "8px 16px",
    borderRadius: 4,
    zIndex: 1,
    display: isHovered ? "block" : "none",
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="./images/places/saghar.jpg"
        alt="Your Image"
        style={imageStyles}
      />
      <div style={textOverlayStyles}>Hovered Text</div>
    </div>
  );
};

export default ImageWithShadow;
