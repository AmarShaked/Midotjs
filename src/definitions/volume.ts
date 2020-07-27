import { Unit } from '../midot.types';

const metric: (system: string) => { [unit: string]: Unit } = (
  system: string,
) => ({
  קורטוב: {
    name: {
      singular: 'קורטוב',
      plural: 'קורטוב',
    },
    anchor: (1 * 6) / 64,
    system,
  },
  כגרוגרת: {
    name: {
      singular: 'כגרוגרת',
      plural: 'גרוגרות',
    },
    anchor: 1 / 3,
    system,
  },
  כזית: {
    name: {
      singular: 'כזית',
      plural: 'זיתים',
    },
    anchor: 1 / 2,
    system,
  },
  עוכלא: {
    name: {
      singular: 'עוכלא',
      plural: 'עוכלות',
    },
    anchor: (1 * 6) / 4 / 2,
    system,
  },
  שמינית: {
    name: {
      singular: 'שמינית',
      plural: 'שמיניות',
    },
    anchor: (1 * 6) / 8,
    system,
  },
  כביצה: {
    name: {
      singular: 'כביצה',
      plural: 'ביצים',
    },
    anchor: 1,
    system,
  },
  רביעית: {
    name: {
      singular: 'רביעית',
      plural: 'רביעיות',
    },
    anchor: (1 * 6) / 4,
    system,
  },
  ליטרא: {
    name: {
      singular: 'ליטרא',
      plural: 'ליטרות',
    },
    anchor: ((1 * 6) / 4) * 2,
    system,
  },
  פרס: {
    name: {
      singular: 'פרס',
      plural: 'פרס',
    },
    anchor: 1 * 3,
    system,
  },
  לוג: {
    name: {
      singular: 'לוג',
      plural: 'לוגים',
    },
    anchor: 1 * 6,
    system,
  },
  עומר: {
    name: {
      singular: 'עומר',
      plural: 'עומרים',
    },
    anchor: (1 * 6 * 4 * 6 * 3) / 10,
    system,
  },
  קב: {
    name: {
      singular: 'קב',
      plural: 'קבים',
    },
    anchor: 1 * 6 * 4,
    system,
  },
  הין: {
    name: {
      singular: 'הין',
      plural: 'הין',
    },
    anchor: 1 * 6 * 4 * 3,
    system,
  },
  סאה: {
    name: {
      singular: 'סאה',
      plural: 'סאה',
    },
    anchor: 1 * 6 * 4 * 6,
    system,
  },
  איפה: {
    name: {
      singular: 'איפה',
      plural: 'איפה',
    },
    anchor: 1 * 6 * 4 * 6 * 3,
    system,
  },
  לתך: {
    name: {
      singular: 'לתך',
      plural: 'לתך',
    },
    anchor: 1 * 6 * 4 * 6 * 3 * 5,
    system,
  },
  כור: {
    name: {
      singular: 'כור',
      plural: 'כור',
    },
    anchor: 1 * 6 * 4 * 6 * 3 * 10,
    system,
  },
  מקווה: {
    name: {
      singular: 'מקווה',
      plural: 'מקוואות',
    },
    anchor: 1 * 6 * 4 * 6 * 40,
    system,
  },
});

export default metric('volume');
