import { METRIC } from '../midot.types';

const metric: { [unit: string]: METRIC } = {
  אצבע: {
    name: {
      singular: 'אצבע',
      plural: 'אצבעות',
    },
    anchor: 1,
  },
  אגודל: {
    name: {
      singular: 'אגודל',
      plural: 'אגודלים',
    },
    anchor: 1,
  },
  טפח: {
    name: {
      singular: 'טפח',
      plural: 'טפחים',
    },
    anchor: 4,
  },
  זרת: {
    name: {
      singular: 'זרת',
      plural: 'זרתות',
    },
    anchor: 12,
  },
  אמה: {
    name: {
      singular: 'אמה',
      plural: 'אמות',
    },
    anchor: 24,
  },
  גומד: {
    name: {
      singular: 'גומד',
      plural: 'גרמידות',
    },
    anchor: 24,
  },
  ריס: {
    name: {
      singular: 'ריס',
      plural: 'ריס',
    },
    anchor: 6400,
  },
  מיל: {
    name: {
      singular: 'מיל',
      plural: 'מילים',
    },
    anchor: 48000,
  },
  פרסה: {
    name: {
      singular: 'פרסה',
      plural: 'פרסות',
    },
    anchor: 192000,
  },
};

export default metric;
