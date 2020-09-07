const debounce = (func,delay = 500) => {
    let timeInputId;
    return (...args) => {
        if(timeInputId) {
            clearTimeout(timeInputId);
        }
        timeInputId = setTimeout(() => {
            func.apply(null,args);
        },delay)
    } 
}