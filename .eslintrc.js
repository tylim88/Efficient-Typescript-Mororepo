module.exports = {
    root: true,
    plugins: ['@nrwl/nx', 'unused-imports'],
    extends: [
        'plugin:prettier/recommended',
        'plugin:json/recommended',
        'plugin:markdown/recommended',
        'plugin:yml/prettier'
    ],
    ignorePatterns: ['dist', 'backups', 'coverage', 'data'],
    overrides: [
        {
            files: ['**/*.{ts,tsx,js,jsx}'],
            rules: {
                '@nrwl/nx/enforce-module-boundaries': [
                    'error',
                    {
                        enforceBuildableLibDependency: true,
                        allow: [],
                        depConstraints: [
                            {
                                sourceTag: '*',
                                onlyDependOnLibsWithTags: ['*']
                            }
                        ]
                    }
                ],
                'no-console': [
                    process.env.CI ? 'error' : 'warn',
                    { allow: ['warn', 'error', 'info'] }
                ],
                'no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'warn',
                'unused-imports/no-unused-vars': [
                    'warn',
                    {
                        vars: 'all',
                        varsIgnorePattern: '^_',
                        args: 'after-used',
                        argsIgnorePattern: '^_'
                    }
                ]
            }
        },
        {
            files: ['**/*.{ts,tsx}'],
            extends: ['plugin:@nrwl/nx/typescript']
        },
        {
            files: ['**/*.{js,jsx}'],
            extends: ['plugin:@nrwl/nx/javascript']
        },
        {
            files: ['packages/react-app/**/*.{ts,tsx,js,jsx}'],
            extends: ['plugin:@nrwl/nx/react']
        },
        {
            files: ['packages/react-app-e2e/**/*.{ts,js}'],
            extends: ['plugin:cypress/recommended']
        }
    ]
}
