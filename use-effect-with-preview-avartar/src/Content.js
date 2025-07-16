import React, { useState, useEffect } from "react";

function Content() {
  const [image, setImage] = useState();

  useEffect(() => {
    // Cleanup function to revoke object URL when component unmounts
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  const handleImageChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
        setImage(undefined);
        return;
    }
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);

    setImage(file);
  };

  return (
    <div className="content">
      <input type="file" onChange={handleImageChange} />

      {image && <img src={image.preview} width="80%" />}
    </div>
  );
}

export default Content;
