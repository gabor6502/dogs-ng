export type Dog = {
    breed: string,
    imageUrl: string
}

// expecting JSON of form {"message":<link to pic of dog>, "status":<usally sucess, or something>}
export type DogHTTP = {
    message: string,
    status: string
}