module.exports = {
    root: true,
    plugins: ['@nrwl/nx'],
    extends: ['plugin:prettier/recommended'],
    ignorePatterns: ['dist'],
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
            files: ['packages/front-end/**/*.{ts,tsx,js,jsx}'],
            extends: ['plugin:@nrwl/nx/react']
        },
        {
            files: ['packages/front-end-e2e/**/*.{ts,tsx,js,jsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ]
}
