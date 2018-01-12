var getArea = ((a) => {
    if(!Array.isArray(a)) {
        return -1;
    } else if(a.length != 2) {
        return -1;
    } else if(!(Number.isInteger(a[0]) && Number.isInteger(a[1]))) {
        return -1;
    } else if((a[0] < 0) || (a[1] < 0)) {
        return -1;
    } else {
        return (a[0]*a[1]);
    }
});

module.exports = getArea;
