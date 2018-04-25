function doGet(e) {
  
  return HtmlService
  .createTemplateFromFile("dashboard_index")
  .evaluate()
  .setTitle("Budget Dashboard")
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
}
