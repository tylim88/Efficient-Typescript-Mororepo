module.exports = {
    root: true,
    plugins: ['@nrwl/nx'],
    ignorePatterns: ['dist'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
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
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@nrwl/nx/typescript'],
            rules: {}
        },
        {
            files: ['*.js', '*.jsx'],
            extends: ['plugin:@nrwl/nx/javascript'],
            rules: {}
        },
        {
            files: ['packages/front-end/**/*.{ts,tsx,js,jsx}'],
            extends: ['plugin:@nrwl/nx/react'],
            rules: {}
        },
        {
            files: ['packages/front-end-e2e/**/*.{ts,tsx,js,jsx}'],
            extends: ['plugin:cypress/recommended'],
            rules: {}
        }
    ]
}
