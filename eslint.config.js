import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import unocss from "@unocss/eslint-plugin";
import common from "eslint-config-neon/flat/common.js";
import edge from "eslint-config-neon/flat/edge.js";
import next from "eslint-config-neon/flat/next.js";
import node from "eslint-config-neon/flat/node.js";
import prettier from "eslint-config-neon/flat/prettier.js";
import react from "eslint-config-neon/flat/react.js";
import typescript from "eslint-config-neon/flat/typescript.js";
import merge from "lodash.merge";

const commonFiles = "{js,mjs,cjs,ts,mts,cts,jsx,tsx}";

const commonRuleset = merge(...common, { files: [`**/*${commonFiles}`] });

const nodeRuleset = merge(...node, { files: [`**/*${commonFiles}`] });

const typeScriptRuleset = merge(...typescript, {
	files: [`**/*${commonFiles}`],
	languageOptions: {
		parserOptions: {
			warnOnUnsupportedTypeScriptVersion: false,
			allowAutomaticSingleRunInference: true,
			project: [`${dirname(fileURLToPath(import.meta.url))}/tsconfig.eslint.json`],
		},
	},
	rules: {
		"@typescript-eslint/consistent-type-definitions": [2, "interface"],
		"@typescript-eslint/naming-convention": [
			2,
			{
				selector: "typeParameter",
				format: ["PascalCase"],
				custom: {
					regex: "^\\w{3,}",
					match: true,
				},
			},
		],
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: [`${dirname(fileURLToPath(import.meta.url))}/tsconfig.eslint.json`],
			},
		},
	},
});

const reactRuleset = merge(...react, {
	files: [`**/*${commonFiles}`],
	plugins: { "@unocss": unocss },
	rules: {
		"@unocss/order": 2,
		"@next/next/no-html-link-for-pages": 0,
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
	},
});

const nextRuleset = merge(...next, { files: [`**/*${commonFiles}`] });

const edgeRuleset = merge(...edge, { files: [`**/*${commonFiles}`] });

const prettierRuleset = merge(...prettier, { files: [`**/*${commonFiles}`] });

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		ignores: [
			"**/node_modules/",
			".git/",
			"**/dist/",
			"**/template/",
			"**/coverage/",
			"**/storybook-static/",
			"**/.next/",
		],
	},
	commonRuleset,
	nodeRuleset,
	typeScriptRuleset,
	reactRuleset,
	nextRuleset,
	edgeRuleset,
	prettierRuleset,
];
