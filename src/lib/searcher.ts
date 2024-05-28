




function levenshteinDistance(s1: string, s2: string): number {
    if (s1.length < s2.length) {
        return levenshteinDistance(s2, s1)
    }

    if (s2.length === 0) {
        return s1.length
    }

    let previousRow = Array.from({ length: s2.length + 1 }, (_, i) => i)
    for (let i = 0; i < s1.length; i++) {
        let currentRow = [i + 1]
        for (let j = 0; j < s2.length; j++) {
            let insertions = previousRow[j + 1] + 1
            let deletions = currentRow[j] + 1
            let substitutions = previousRow[j] + (s1[i] !== s2[j] ? 1 : 0)
            currentRow.push(Math.min(insertions, deletions, substitutions))
        }
        previousRow = currentRow
    }

    return previousRow[s2.length]
}

export function findApproximateMatches(array: any[], target: string, maxDistance: number, children?: string): any[] {
    const matches: any[] = []
    const source = children ? array.map((item: any) => item[children]) : array
    for (let idx = 0; idx < array.length; idx++) {
        const text = source[idx]
        for (let i = 0; i < text.length - target.length + 1; i++) {
            const substring = text.substring(i, i + target.length)
            const distance = levenshteinDistance(substring, target)
            if (distance <= maxDistance) {
                matches.push(array[idx])
                break // Stop searching this text once a match is found
            }
        }
    }

    return matches
}