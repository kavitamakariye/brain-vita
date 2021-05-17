const usernameRegex = /^[a-zA-Z]+$/;

export const isValidateUsername = (userName) => userName.match(usernameRegex);