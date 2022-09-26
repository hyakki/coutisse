import { a } from 'react-spring'

import Image, { StaticImageData } from 'next/image';

interface CardProps {
    aspectRatio?: Number
    style: any
    image: StaticImageData
    alt?: string
    name: string
    index: number
    children?: React.ReactNode,
}

const Card = ({ aspectRatio = 1.0, style, image, name, index, children }: CardProps) => {
  const width = aspectRatio < 1.0 ? 'auto' : '100%'
  const height = aspectRatio < 1.0 ? '100%' : 'auto'

  return (
    <a.div
      className="absolute center-xy h-full bg-white p-4 shadow-xl will-change-transform"
      style={{ aspectRatio, width, height, zIndex: index, ...style }}
    >
      <div className="relative bg-black w-full h-full">
        <Image layout="fill" src={image} alt='' priority objectFit="cover" placeholder="blur" blurDataURL={image.blurDataURL} />
      </div>
      {/* <div className="absolute bottom-0 right-0 p-4 bg-white text-black">
          {name}
          </div> */}
      {children &&
      <div className="absolute top-0 left-0 p-4 bg-white text-black">
        {children}
      </div>
      }
    </a.div>
  );
};

export default Card;
