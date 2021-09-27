const receivesAFunction = (spy) => {
    spy();
}
const returnsANamedFunction = (before) => {
    return function before() {}
}
const returnsAnAnonymousFunction = () => {
    return () => console.log()
}

