import Container from '@/components/Container';
import Card from '@/components/Card';

import { useState } from 'react';
import { useTransition } from 'react-spring';

import classNames from 'classnames';

interface Card {
    ratio: number,
    rand: number,
    index: number,
    src: string,
}

interface StackProps {
    className?: string
    cards: Card[]
}

const Stack = ({cards, className} : StackProps) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState([] as Card[]);

    const handleAdd = () => {
        if (count === cards.length) {
            return;
        }

        setVisible([...visible, cards[count]]);
        setCount(count + 1);
    };

    const handleRemove = () => {
        if (count === 0) {
            return;
        }

        const arr = visible.slice(0, -1);
        setVisible(arr);
        setCount(count - 1);
    };

    const transitions = useTransition(visible, {
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
                {transitions(({ opacity, scale, rotate }, item, _, index) => (
                    <Card
                        aspectRatio={item.ratio}
                        key={index}
                        style={{
                            opacity,
                            transform: "translate3d(-50%,-50%,0px)",
                            scale,
                            rotate: rotate.to((v) => v * item.rand),
                            zIndex: index,
                        }}
                        src={item.src}
                    />
                ))}
            </Container>
            <div
                className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-50"
                onClick={handleRemove}
            ></div>

            <div
                className="absolute top-0 left-1/2 w-1/2 h-full cursor-pointer z-50"
                onClick={handleAdd}
            ></div>
        </div>
    )
}

export default Stack;
