import React from 'react';
import { Square } from '../index';

export default { title: 'Square' };

export const withX = () => <Square value="X"></Square>;
export const withO = () => <Square value="O"></Square>;