const glob = require('glob-fs')({ gitignore: true });
const files = glob.readdirSync('./app/components/**/*.vue', {});
const componentsName = files.map(file => {
  const parts = file.split('.component');
  if (parts[0].includes('\\')) {
    const paths = parts[0].split('\\');
    return paths[paths.length - 1];
  }

  const paths = parts[0].split('/');
  return paths[paths.length - 1];
});

const componentsNameReg = componentsName.join('|').replace(/\-/g, '\\-');
const reg = new RegExp(`(<\/?(${componentsNameReg}))`, 'gm');

module.exports = function(content, map) {
  // We are replacing the name of the component with the name + -component
  // We use this to be able to name the components as MyThingComponent instead of MyThing
  content = content.replace(reg, '\$1-component');

  return content
}