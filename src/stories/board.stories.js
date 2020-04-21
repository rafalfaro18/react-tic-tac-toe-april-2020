import React from 'react';
import { action } from '@storybook/addon-actions';
import { Board } from '../index';

export default { title: 'Board' };

export const empty = () => <Board squares={Array(9).fill(null)} onClick={action('Square clicked')} />;
export const completed = () => <Board squares={["O","X","O","O","X","X","X","O","X"]} onClick={action('Square clicked')} />;