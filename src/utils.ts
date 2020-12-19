/**
 * @module pivot-music-tools.utils
 * @description A set of common utilities
 */

type EnvironmentVariable = string

/**
 *
 * @param envVar
 */
export const getRequiredConfigFromEnv = (
    envVar: EnvironmentVariable,
): string => {
    const variable = process.env[envVar]
    if (!variable) {
        throw new Error(`Expected required environment variable ${envVar}`)
    }
    return variable
}
