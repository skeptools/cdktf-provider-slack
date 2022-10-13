import { CdktfProviderProject } from "@cdktf/provider-project";
const project = new CdktfProviderProject({
  author: "Ryan Martin",
  authorAddress: "ryan.martin@medly.com",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project"],
  name: "cdktf-provider-slack",
  projenrcTs: true,
  repositoryUrl: "git@github.com:skeptools/cdktf-provider-slack.git",
  terraformProvider: "jmatsu/slack@~> 0.8.1",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();