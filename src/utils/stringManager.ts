declare global {
  interface String {
    toCamelCase(): string;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
  }
}

export {};

export const isNullOrEmpty = (value: string | null | undefined): boolean => {
  return !value || value.trim().length === 0;
};

String.prototype.isEmpty = function (): boolean {
  return this.length === 0;
};

String.prototype.isNotEmpty = function (): boolean {
  return !this.isEmpty();
};
