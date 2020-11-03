function retArg(a) {
    return a;
}

function retArgSum(a1, a2) {
    return a1 + a2;
}

function powDou() {
    let arrList = [1, 2, "text", 3, "New text", 4];
    console.log("Стандартные значения");
    console.log(arrList);
    let newArray = arrList.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log("Преобразованные значения");
    console.log(newArray);
}