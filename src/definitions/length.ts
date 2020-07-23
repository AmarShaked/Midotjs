import { Unit } from '../midot.types';

const metric: (system: string) => { [unit: string]: Unit } = (
  system: string,
) => ({
  אצבע: {
    name: {
      singular: 'אצבע',
      plural: 'אצבעות',
    },
    anchor: 1,
    system,
  },
  אגודל: {
    name: {
      singular: 'אגודל',
      plural: 'אגודלים',
    },
    anchor: 1,
    system,
  },
  טפח: {
    name: {
      singular: 'טפח',
      plural: 'טפחים',
    },
    anchor: 4,
    system,
  },
  זרת: {
    name: {
      singular: 'זרת',
      plural: 'זרתות',
    },
    anchor: 12,
    system,
  },
  אמה: {
    name: {
      singular: 'אמה',
      plural: 'אמות',
    },
    anchor: 24,
    system,
  },
  גומד: {
    name: {
      singular: 'גומד',
      plural: 'גרמידות',
    },
    anchor: 24,
    system,
  },
  ריס: {
    name: {
      singular: 'ריס',
      plural: 'ריס',
    },
    anchor: 6400,
    system,
  },
  מיל: {
    name: {
      singular: 'מיל',
      plural: 'מילים',
    },
    anchor: 48000,
    system,
  },
  פרסה: {
    name: {
      singular: 'פרסה',
      plural: 'פרסות',
    },
    anchor: 192000,
    system,
  },
});

export default metric('length');
