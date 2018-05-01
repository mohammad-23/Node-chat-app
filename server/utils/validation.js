var isRealString = (str) => {
    return typeof str ==='string' && str.trim().length >0 && str.split(" ").join("").toLowerCase();
};

module.exports = {
    isRealString
};