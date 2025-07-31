export type Score = {
    name: string,
    score: number,
    date: string
}

// for the current user playing, don't need their name
export type UserScore = {
    score: number,
    date: string
}