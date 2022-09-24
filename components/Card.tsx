import { a } from 'react-spring'

import Image from 'next/image';

interface CardProps {
    aspectRatio?: Number
    style: any
    src: string
    alt?: string
}

const Card = ({ aspectRatio = 1.0, style, src }: CardProps) => {
  const width = aspectRatio < 1.0 ? 'auto' : '100%'
  const height = aspectRatio < 1.0 ? '100%' : 'auto'

  return (
    <a.div
      className="absolute center-xy h-full bg-white p-4 shadow-xl"
      style={{ aspectRatio, width, height, ...style }}
    >
      <div className="relative bg-black w-full h-full">
        <Image layout="fill" src={src} alt='' priority objectFit="cover" />
      </div>
    </a.div>
  );
};

export default Card;
