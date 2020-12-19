module.exports = {
    globals: {
        'ts-jest': {
            compiler: 'ttypescript',
        },
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['<rootDir>setupTests.ts'],
}
