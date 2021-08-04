function titleize(arr, printCallback) {
    let titleized = arr.map((name) => {
        return `Mx. ${name} Jingleheimer Schmidt`;
    });
    printCallback(titleized);
};


// let arr = 
    titleize(["Mary", "Brian", "Leo"], (ele)=> {
    console.log(ele);
});