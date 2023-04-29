import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H1 } from "../../components";

const PhotosContainer = styled.div`
  margin: 0 8rem;
  padding: 3rem 0 0 0;
`;

const PhotosCardContainer = styled.div`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  grid-auto-flow: dense;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const apiKey = "2SZiYTIQKzzbISXA0JI0Rw8fiWkH03hqGsEjcwBQma4";
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=30&query=dogs&client_id=${apiKey}`
        );
        const data = await response.json();
        const dogImages = data.map((image) => ({
          url: image.urls.small,
        }));
        setPhotos(dogImages);
      } catch (error) {
        //
      }
    };

    fetchDogImages();
  }, []);

  return (
    <PhotosContainer>
      <H1>Photos</H1>

      <PhotosCardContainer>
        {photos.map((img) => (
          <Image src={img.url} key={img.url} alt='testing' />
        ))}
      </PhotosCardContainer>
    </PhotosContainer>
  );
}
