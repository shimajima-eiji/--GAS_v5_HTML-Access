function doGet(e) {
  var template = 'index';  // ○○.htmlファイルを呼び出す
  return HtmlService.createTemplateFromFile(template).evaluate();
}
