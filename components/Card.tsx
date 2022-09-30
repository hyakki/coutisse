import { a } from 'react-spring'

import Image, { StaticImageData } from 'next/image';

interface CardProps {
    aspectRatio?: Number
    style: any
    image: StaticImageData
    alt?: string
    index: number
}

const Card = ({ aspectRatio = 1.0, style, image, index }: CardProps) => {
  const width = aspectRatio < 1.0 ? 'auto' : '100%'
  const height = aspectRatio < 1.0 ? '100%' : 'auto'

  return (
    <a.div
      className="absolute center-xy h-full bg-white p-2 shadow-xl will-change-transform select-none"
      style={{ aspectRatio, width, height, zIndex: index, ...style }}
    >
      <div className="relative bg-black w-full h-full">
        <Image layout="fill" src={image} alt='' priority objectFit="cover" placeholder="blur" blurDataURL={image.blurDataURL} />
      </div>
    </a.div>
  );
};

export default Card;
