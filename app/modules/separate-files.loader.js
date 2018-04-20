module.exports = function (content, map) {
    // TODO: Refactor this loader
    const request = this.request.split('!');
    const fileFullPath = request[request.length - 1];
    const filePath = this.context;
    const fileNameAndExtension = fileFullPath.replace(filePath, '');
    const fileName = fileNameAndExtension.replace('.html.vue', '');

    // If the file is not from our project
    if (filePath.includes('nuxt') || filePath.includes('node_modules')) {
        return content;
    }

    // Generate the .css file path
    const sp = filePath.includes('\\') ? '\\' : '/';
    const stylesPath = filePath.split(`${sp}app${sp}`).join(`${sp}.temp${sp}css${sp}`) + fileName + '.css';

    // If is a single file component
    if (!fileNameAndExtension.includes('.html.vue')) {
      const reg = new RegExp(`<style.*?>((.|\\s)*?)<\/style>`);
      content = content.replace(reg, `<style scoped>@import '${stylesPath.replace('.vue', '')}';</style>`);

      return content;
    }

    // Otherwise
    const scriptPath = filePath + fileName + '.ts';

    content += `
<script src="${scriptPath}" lang='ts'></script>
<style scoped>@import '${stylesPath}';</style>
  `;
    return content
}