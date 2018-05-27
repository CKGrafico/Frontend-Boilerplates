const fs = require('fs');

module.exports = function (content, map) {
    // TODO: Refactor this loader
    const request = this.request.split('!');
    const fileFullPath = request[request.length - 1];
    const filePath = this.context;
    const fileNameAndExtension = fileFullPath.replace(filePath, '');
    const fileName = fileNameAndExtension.replace('.html.vue', '');

    // If the file is not from our project
    if (filePath.includes('node_modules')) {
        return content;
    }

    // Generate the .css file path
    const sp = filePath.includes('\\') ? '\\' : '/';
    const stylesPath = filePath.split(`${sp}app${sp}`).join(`${sp}dist${sp}css${sp}`) + fileName + '.css';
    
    // If is a single file component
    if (!fileNameAndExtension.includes('.html.vue')) {
        const stylesContent = fs.readFileSync(stylesPath.replace('.vue', ''), 'utf8');
        const reg = new RegExp(`<style.*?>((.|\\s)*?)<\/style>`);
        content = content.replace(reg, `<style scoped>${stylesContent}</style>`);

        return content;
    }

    // Otherwise
    const scriptPath = filePath + fileName + '.ts';
    const stylesContent = fs.readFileSync(stylesPath, 'utf8');

    content += `
<script src="${scriptPath}" lang='ts'></script>
<style scoped>${stylesContent}</style>
  `;
    return content
}