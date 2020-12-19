/**
 * @module pivot-music-tools.provider
 * @description A provider describes a endpoint consumed by the pivot-music * api. A provider is expected to encapsulate common interactions with a
 * REST endpoint.
 */

export interface Provider {
    apiKey?: string
    /**
     * Fetch is used to consume a given API endpoint
     * @param endpoint
     */
    fetch(endpoint?: string): unknown
    fetch(endpoint?: string, apply?: CallableFunction[]): unknown
}
