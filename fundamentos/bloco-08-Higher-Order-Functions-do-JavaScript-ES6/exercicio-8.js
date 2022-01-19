const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => {
    return name.length === 5;
});

console.log(findNameWithFiveLetters);