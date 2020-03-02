export const required = (value) => {
    if (value) return undefined;
    return "Required field!"
}
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength10 = minLength(10)