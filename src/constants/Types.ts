type Items = {
    Name: string
    Likes: number
    Comments: string[]
}
type List = {
    Title: string
    Items: Items[]
}

export type Lists = List[]
