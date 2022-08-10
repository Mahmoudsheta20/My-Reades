import { getAll, update, search } from '../BooksAPI'
export const AllData = async() => {
    try {
        const data = await getAll()
        return data
    } catch (err) {
        return false
    }
}

export const Update = async(id, shelf) => {
    try {
        update(id, shelf)
    } catch (err) {
        return false
    }
}

export const Search = async input => {
    try {
        const data = await search(input)
        return data
    } catch (err) {
        return false
    }
}