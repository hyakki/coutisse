import { a } from 'react-spring'

import Image from 'next/image';

interface CardProps {
    aspectRatio?: Number
    style: any
    src: string
    alt?: string
    name: string
    zIndex: number
}

const Card = ({ aspectRatio = 1.0, style, src, name, zIndex }: CardProps) => {
  const width = aspectRatio < 1.0 ? 'auto' : '100%'
  const height = aspectRatio < 1.0 ? '100%' : 'auto'

  return (
    <a.div
      className="absolute center-xy h-full bg-white p-4 shadow-xl"
      style={{ aspectRatio, width, height, zIndex, ...style }}
    >
      <div className="relative bg-black w-full h-full">
        <Image layout="fill" src={src} alt='' priority objectFit="cover" />
      </div>
      <div className="absolute bottom-0 right-0 p-4 bg-white text-black">
        {name}
      </div>
    </a.div>
  );
};

export default Card;
