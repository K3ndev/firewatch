import type { Component } from 'solid-js';

// types safe
type Props = {
    disc: string
}

export const Button: Component<Props> = (Props) => {

    // destructuring
    const { disc } = Props

    return (
        <button>
            {disc}
        </button>
    );
};

