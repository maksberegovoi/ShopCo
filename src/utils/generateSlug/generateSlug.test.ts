import { expect, describe, it } from 'vitest'
import { generateSlug } from './generateSlug'

describe('Generate slug', () => {
    it('generate', () => {
        expect(generateSlug('T-shirt')).toBe('tshirt')
        expect(generateSlug('ONE LIFE GRAPHIC T-SHIRT')).toBe(
            'one-life-graphic-tshirt'
        )
    })
})
