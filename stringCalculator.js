export function add(numbers) {
    
    if (numbers === '') return 0;
  
    let speChar = /[,\n]/;
    let numbersToAdd = numbers;
  
    if (numbers.startsWith('//')) {
      const end = numbers.indexOf('\n');
      speChar = new RegExp(numbers.substring(2, end));
      numbersToAdd = numbers.substring(end + 1);
    }
  
    const nums = numbersToAdd.split(speChar)
      .map(str => str.trim())
      .filter(str => str !== '')
      .map(Number);
  
    const negatives = nums.filter(n => n < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
}

