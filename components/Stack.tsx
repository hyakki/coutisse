import Container from '@/components/Container';
import Card from '@/components/Card';

import { useTransition } from 'react-spring';

import classNames from 'classnames';

import { StaticImageData } from 'next/image';

interface Card {
  width: number
  height: number
  ratio: number
  rand: number
  index: number
  image: StaticImageData,
  name: string
  person: string
  oi: number
}

interface StackProps {
    className?: string
    cards: Card[]
}

const Stack = ({cards, className} : StackProps) => {
    const transitions = useTransition(cards, {
        from: {
            opacity: 0,
            scale: 2,
            rotate: 0,
        },
        enter: {
            opacity: 1,
            scale: 1,
            rotate: 10,
        },
        leave: {
            opacity: 0,
            scale: 2,
            rotate: 0,
        },
        config: {
            tension: 180,
            friction: 20,
        },
    });

    const elementClass = classNames(
        'absolute top-0 left-0',
        'w-1/2 h-screen',
        className,
    );

    const getDisplay = (item: Card) => {
        const { length } = cards;
        const { oi } = item;
        const dist = Math.abs(length - oi)

        return dist > 3 ? 'none' : 'block'
    }

    return (
        <div className={elementClass}>
            <Container>
                {transitions(({ opacity, scale, rotate }, item) => (
                    <Card
                        aspectRatio={item.ratio}
                        key={item.image.src}
                        style={{
                            opacity,
                            transform: "translate3d(-50%,-50%,0px)",
                            scale,
                            rotate: rotate.to((v) => v * item.rand),
                            index: item.index,
                            display: getDisplay(item),
                        }}
                        image={item.image}
                        index={item.index}
                    ></Card>
                ))}
            </Container>
        </div>
    )
}

export default Stack
