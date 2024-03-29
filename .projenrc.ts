import { CdktfProviderProject } from "@cdktf/provider-project";
import { NpmAccess } from "projen/lib/javascript";

const nodeVersion = '16';
const project = new CdktfProviderProject({
  author: "Ryan Martin",
  authorAddress: "rlmartin@gmail.com",
  cdktfVersion: "^0.13.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: `${nodeVersion}.0.0`,
  maxNodeVersion: nodeVersion,
  workflowNodeVersion: nodeVersion,
  jsiiVersion: "^1.69.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project@~0"],
  name: "@skeptools/cdktf-provider-slack",
  githubNamespace: "skeptools",
  projenrcTs: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  repositoryUrl: "git@github.com:skeptools/cdktf-provider-slack.git",
  terraformProvider: "jmatsu/slack@~> 0",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();