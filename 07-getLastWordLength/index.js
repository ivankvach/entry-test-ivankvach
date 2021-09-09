export const getLastWordLength = str => {
    const strArray = str.trim().split(' ');
    const lastWord = strArray.pop();

    return lastWord.length;

};
