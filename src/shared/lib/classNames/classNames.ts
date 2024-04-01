type Mods = Record<string, boolean>;

export default (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([__, value]) => value)
      .map(([clsName]) => clsName),
    ...additional,
  ].join(' ');
};
