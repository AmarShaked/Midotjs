export interface Unit {
  name: {
    singular: string;
    plural: string;
  };
  anchor: number;
  system?: string;
}
