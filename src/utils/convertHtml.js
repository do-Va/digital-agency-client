const convertHtml = convert => {
  return convert
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
};

export default convertHtml;
