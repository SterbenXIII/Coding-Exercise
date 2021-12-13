let reverse = (string) => {
    return string ? reverse(string.substr(1)) + string[0] : string;
}

console.log(reverse('hello world'));