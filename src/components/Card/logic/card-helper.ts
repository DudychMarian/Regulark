export const checkRegExp = (value: string, pattern: string): string[] => {
  const flagMatch = pattern.match("/([gimy]{1,4})$");
  const flag = flagMatch ? flagMatch?.[1] : null;
  let patternValue = flag ? pattern.replace(flag, "") : pattern;
  if (patternValue[0] === "/" && patternValue[patternValue.length - 1] === "/") {
    patternValue = patternValue.slice(1).slice(0, -1);
  }
  const exp = new RegExp(patternValue, flag || "");
  const matches = value.match(exp);
  return [...(matches || [])].filter((v) => v);
};
