const capitalizeStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { capitalizeStr, formatPrice }