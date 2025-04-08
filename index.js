
  function reverseStrings(items, specificSubstring) {
    const increaseorder = items.sort();
    const reversedincrease = increaseorder.map(str => str.split('').reverse().join(''));

    const decreaseorder = items.filter(str => str.includes(specificSubstring)).sort().reverse();
    const reverseddecrease = decreaseorder.map(str => str.split('').reverse().join(''));

    return {
        reversedincrease,
        reverseddecrease,
    };
}

function investigate(integer) {
        integer.map(num => {
        if (num > 0) {
        return 'positive';}
        else if (num < 0) {
       return 'negative';}
        else return 'zero';
    });
}

function sortworkersbywages(workers) {
    return workers.sort((a, b) => a.wage- b.wage);
}

function duplicate(numbers) {
    numbers.forEach(num => {
        console.log(num * 2);
    });
}

