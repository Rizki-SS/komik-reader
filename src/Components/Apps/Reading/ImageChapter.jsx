import React from 'react';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';

const ImageChapter = (props) => {
  const { scrollPosition } = props;

  return (
    <div>
      {props.chapter_image?.map((e, i) => (
        <div key={e.image_number} align="center">
          <LazyLoadImage
            effect="blur"
            key={e.image_number}
            scrollPosition={scrollPosition}
            src={e.chapter_image_link} />
          <p>{e.image_number}</p>
        </div>
      ))}
    </div>
  )
};
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(ImageChapter);