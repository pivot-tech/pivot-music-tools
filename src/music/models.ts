/**
 * @module pivot-music-tools.music.models
 * @description A module which describes all PivotMusic models
 */
import { Record, String, Array, Number, Null, Static } from 'runtypes'

export const Artist = Record({
    id: String,
    name: String,
    resourceImageUrl: String.Or(Null),
    genre: String,
})

export type Artist = Static<typeof Artist>

export const Tour = Record({
    id: String,
    resourceImageUrl: String.Or(Null),
    artists: Record({
        headliner: String,
        supportingArtists: Array(String),
    }),
})

export type Tour = Static<typeof Tour>

export const Song = Record({
    id: String,
    resourceImageUrl: String.Or(Null),
    artistId: String,
    title: String,
    genre: String,
})
export type Song = Static<typeof Song>

export const Merchandise = Record({
    id: String,
    artistId: String,
    resourceImageUrl: String.Or(Null),
    price: Record({
        USD: Number,
        GBP: Number.Or(Null),
        YEN: Number.Or(Null),
    }),
    item: Record({
        description: String,
        inventory: Array(
            Record({
                size: String,
                quantity: Number,
            }),
        ),
    }),
})
export type Merchandise = Static<typeof Merchandise>
