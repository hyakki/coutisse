import Container from '@/components/Container';
import Card from '@/components/Card';

import { useTransition } from 'react-spring';

import classNames from 'classnames';

interface Card {
    ratio: number
    rand: number
    image: string
    name: string
    index: number
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

    /* const getOpacity = (o: SpringValue<number>, item: Card) => {
     *     return o.to((v) => {
     *         const { length } = cards;
     *         const { oi } = item;

     *         const dist = Math.abs(length - oi)

     *         if (dist > 0)  {
     *             const vm = Math.max(0, 100 - (34 * dist)) / 100

     *             return vm
     *         }

     *         return v
     *     });
     * } */

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
                        key={item.image}
                        style={{
                            // opacity: getOpacity(opacity, item),
                            opacity,
                            transform: "translate3d(-50%,-50%,0px)",
                            scale,
                            rotate: rotate.to((v) => v * item.rand),
                            index: item.index,
                            display: getDisplay(item),
                        }}
                        image={item.image}
                        name={item.name}
                        index={item.index}
                    >
                    </Card>
                ))}
            </Container>
        </div>
    )
}

export default Stack
