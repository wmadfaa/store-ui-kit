module.exports = {
  components: "./src/components",
  outputPath: "./dist/playroom",

  // Optional:
  title: "Store Ui Kit",
  snippets: "./.playroom/snippets.js",
  frameComponent: "./.playroom/FrameComponent.js",
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: false,
  paramType: "hash",
  baseUrl: "/playroom/",
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
};
