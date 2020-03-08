export const required = (value) => {
    if (value) return undefined;
    return "Required field!"
}
export const requiredEmpty = (value) => {
    if (value) return undefined;
    return "You can't send an empty comment"
}
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength10 = minLength(10)
export const minLength1 = minLength(1)
