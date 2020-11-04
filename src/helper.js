
export const diffForHumans = function (number) {
    if (number > 100000000) {
        return (number / 100000000).toFixed(1) + ' 亿'
    }else if (number > 10000){
        return (number / 10000).toFixed(1) + 'w'
    }else if (number > 1000){
        return (number / 1000).toFixed(1) + 'k'
    }
    return number
}