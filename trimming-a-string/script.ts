function trim (str: string, size: number): string {
    if (str.length <= size){
        return str;
    }
    if (size <= 3) {
        str = `${str.slice(0, size)}...`
    } else if (str.length > size) {
        str = `${str.slice(0, size - 3)}...`;
    }
    return str;
}

console.log(trim("Etf", 3));