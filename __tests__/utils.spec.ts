import { getRequiredConfigFromEnv } from '../src/utils'

describe('PivotMusicTools Utils', () => {
    describe('getRequiredConfigFromEnv', () => {
        it('throws an error when an environment variable cannot be found', () => {
            expect(() => getRequiredConfigFromEnv('TESTING_1_2_3')).toThrow()
        })
    })
})
