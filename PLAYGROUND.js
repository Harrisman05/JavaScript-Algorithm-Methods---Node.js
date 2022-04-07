const arrow = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

arrow('Hello')('Harley');