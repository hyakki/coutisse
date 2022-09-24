import Container from '@/components/Container';
import Card from '@/components/Card';

import { useTransition } from 'react-spring';

import classNames from 'classnames';

interface Card {
    ratio: number
    rand: number
    src: string
    name: string
    zIndex: number
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

    return (
        <div className={elementClass}>
            <Container>
                {transitions(({ opacity, scale, rotate }, item) => (
                    <Card
                        aspectRatio={item.ratio}
                        key={item.src}
                        style={{
                            opacity,
                            transform: "translate3d(-50%,-50%,0px)",
                            scale,
                            rotate: rotate.to((v) => v * item.rand),
                            zIndex: item.zIndex,
                        }}
                        src={item.src}
                        name={item.name}
                        zIndex={item.zIndex}
                    />
                ))}
            </Container>
        </div>
    )
}

export default Stack;
