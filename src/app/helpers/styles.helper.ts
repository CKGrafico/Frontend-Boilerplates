/**
 * This helper changes CSS Modules to any convention that you have
 * In this case we are using Modified BEM
 * block-element--modifier
 * will be
 * block$element$$modifier
 * @param file
 */
export function createStyles(file: any) {
  if (!file) {
    throw new Error('Create Styles cannot work for an undefined file');
  }

  const styles: {[key: string]: string} = {};
  Object.entries(file).forEach(([key, value]: [string, any]) => {
    styles[convert(key)] = value;
  });

  return styles;
}

function convert(text: string): string {
  return text.replace(/-/g, '$');
}
