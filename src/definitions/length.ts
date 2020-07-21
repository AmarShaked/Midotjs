import { UNIT } from '../midot.types';

const metric: { [unit: string]: UNIT } = {
  אצבע: {
    name: {
      singular: 'אצבע',
      plural: 'אצבעות',
    },
    anchor: 1,
    system: 'length',
  },
  אגודל: {
    name: {
      singular: 'אגודל',
      plural: 'אגודלים',
    },
    anchor: 1,
    system: 'length',
  },
  טפח: {
    name: {
      singular: 'טפח',
      plural: 'טפחים',
    },
    anchor: 4,
    system: 'length',
  },
  זרת: {
    name: {
      singular: 'זרת',
      plural: 'זרתות',
    },
    anchor: 12,
    system: 'length',
  },
  אמה: {
    name: {
      singular: 'אמה',
      plural: 'אמות',
    },
    anchor: 24,
    system: 'length',
  },
  גומד: {
    name: {
      singular: 'גומד',
      plural: 'גרמידות',
    },
    anchor: 24,
    system: 'length',
  },
  ריס: {
    name: {
      singular: 'ריס',
      plural: 'ריס',
    },
    anchor: 6400,
    system: 'length',
  },
  מיל: {
    name: {
      singular: 'מיל',
      plural: 'מילים',
    },
    anchor: 48000,
    system: 'length',
  },
  פרסה: {
    name: {
      singular: 'פרסה',
      plural: 'פרסות',
    },
    anchor: 192000,
    system: 'length',
  },
};

export default metric;
