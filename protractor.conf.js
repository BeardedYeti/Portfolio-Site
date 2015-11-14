exports.config = {
  //seleniumServerJar: "E:/Users/Smith/Desktop/eclipse/selenium-2.48.2/selenium-java-2.48.2.jar",
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*.js'],
  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:3000',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
