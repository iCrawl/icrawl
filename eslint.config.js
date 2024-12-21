import { common, edge, next, node, prettier, react, typescript } from "eslint-config-neon";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import reactCompiler from "eslint-plugin-react-compiler";
import merge from "lodash.merge";
import tseslint from "typescript-eslint";

const commonFiles = "{js,mjs,cjs,ts,mts,cts,jsx,tsx}";
const commonJSX = "{jsx,tsx}";

const commonRuleset = merge(...common, { files: [`**/*${commonFiles}`] });

const nodeRuleset = merge(...node, {
	files: [`**/*${commonFiles}`],
	rules: {
		"no-restricted-globals": 0,
		"n/prefer-global/url": 0,
		"n/prefer-global/url-search-params": 0,
		"n/prefer-global/process": 0,
	},
});

const typeScriptRuleset = merge(...typescript, {
	files: [`**/*${commonFiles}`],
	languageOptions: {
		parserOptions: {
			warnOnUnsupportedTypeScriptVersion: false,
			allowAutomaticSingleRunInference: true,
			project: ["tsconfig.eslint.json"],
		},
	},
	rules: {
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
		"import-x/resolver-next": [
			createTypeScriptImportResolver({
				alwaysTryTypes: true,
				project: ["tsconfig.eslint.json"],
			}),
		],
	},
});

const reactRuleset = merge(...react, {
	files: [`src/**/*${commonJSX}`, "src/**/*ts"],
	plugins: {
		"react-compiler": reactCompiler,
	},
	rules: {
		"@next/next/no-html-link-for-pages": 0,
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		"react/jsx-handler-names": 0,
		"react-refresh/only-export-components": [0, { allowConstantExport: true }],
		"react-compiler/react-compiler": 2,
		"jsdoc/no-bad-blocks": 0,
		"tsdoc/syntax": 0,
		"@typescript-eslint/unbound-method": 0,
	},
});

const nextRuleset = merge(...next, { files: [`src/**/*${commonFiles}`] });

const edgeRuleset = merge(...edge, { files: [`src/**/*${commonFiles}`] });

const prettierRuleset = merge(...prettier, { files: [`**/*${commonFiles}`] });

export default tseslint.config(
	{
		ignores: ["**/node_modules/", ".git/", "**/dist/", "**/coverage/", "**/.next/"],
	},
	commonRuleset,
	nodeRuleset,
	typeScriptRuleset,
	reactRuleset,
	nextRuleset,
	edgeRuleset,
	prettierRuleset,
);
