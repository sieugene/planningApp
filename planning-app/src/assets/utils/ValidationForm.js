
export const required = (value) => {
    if (value) return undefined;
    return "Required field!"
}
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
