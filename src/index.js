module.exports = function toReadable (number) {
    units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    absNumber = String(Math.abs(number));
    if (absNumber < 20) {
        return units[absNumber];
    } else if (absNumber < 100 && absNumber % 10 === 0) {
        return dozens[absNumber[0]];
    } else if (absNumber < 100 && absNumber % 10 !== 0) {
        return `${dozens[absNumber[0]]} ${units[absNumber[1]]}`;
    } else if (absNumber.substring(1) < 20 && absNumber % 100 !== 0) {
        return `${units[absNumber[0]]} hundred ${absNumber[1] === '0' ? units[absNumber[2]] : units[absNumber.substring(1)]}`;
    } else if (absNumber < 1000 && absNumber % 100 === 0) {
        return `${units[absNumber[0]]} hundred`;
    } else if (absNumber < 1000 && absNumber % 100 !== 0) {
        return `${units[absNumber[0]]} hundred ${absNumber[2] === '0' ? dozens[absNumber[1]] : dozens[absNumber[1]] + ' ' + units[absNumber[2]]}`
    }
}