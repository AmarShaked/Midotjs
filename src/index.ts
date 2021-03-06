import definitions from './definitions';
import { Unit } from './midot.types';

class Converter {
  private destination?: Unit;

  private origin?: Unit;

  private readonly val: number;

  constructor(numerator: number) {
    this.val = numerator;
  }

  /**
   * Lets the converter know the source unit abbreviation
   */
  from = (fromSize: string) => {
    if (this.destination) {
      throw new Error('.from must be called before .to');
    }

    this.origin = this.getUnit(fromSize);

    if (!this.origin) {
      throw this.throwUnsupportedUnitError(fromSize);
    }

    return this;
  };

  to = (toSize: string) => {
    if (!this.origin) {
      throw new Error('.to must be called after .from');
    }

    this.destination = this.getUnit(toSize);

    if (!this.destination) {
      throw this.throwUnsupportedUnitError(toSize);
    }

    if (this.destination.name === this.origin.name) {
      return this.val;
    }

    // You can't go from liquid to mass, for example
    if (this.destination.system !== this.origin.system) {
      throw new Error(
        `Cannot convert incompatible measures of ${this.destination.system} and ${this.origin.system}`,
      );
    }

    /**
     * Convert from the source value to its anchor inside the system
     */
    const result = this.val * this.origin.anchor;

    /**
     * Convert to another unit inside the destination system
     */
    return result / this.destination?.anchor;
  };

  getUnit = (unit: string): Unit | undefined => {
    return definitions[unit];
  };

  throwUnsupportedUnitError = (what: string) =>
    new Error(
      `Unsupported unit ${what}, use one of: ${Object.keys(definitions).join(
        ', ',
      )}`,
    );
}

export default (numerator: number) => new Converter(numerator);
