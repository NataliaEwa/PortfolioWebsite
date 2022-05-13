module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['react'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			tsx: true
		}
	},
	env: { es6: true },
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'next',
		'next/core-web-vitals',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error'],
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'enumMember',
				format: ['PascalCase']
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T']
			},
			{
				selector: 'interface',
				format: ['PascalCase']
			}
		],
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array'
			}
		],
		'no-shadow': 'off',
		'no-console': 'warn',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				arrowParameter: false,
				parameter: true,
				propertyDeclaration: true,
				arrayDestructuring: false,
				variableDeclarationIgnoreFunction: true
			}
		]
	}
};
