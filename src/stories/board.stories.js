import React from 'react';
import { Board } from '../index';

export default { title: 'Board' };

export const empty = () => <Board squares={Array(9).fill(null)} />;
export const completed = () => <Board squares={["O","X","O","O","X","X","X","O","X"]} />;