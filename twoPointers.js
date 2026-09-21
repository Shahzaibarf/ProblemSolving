function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentVal = nums[left] + nums[right];

        if (currentVal === target) {
            return [nums[left], nums[right]];
        } 
        else if (currentVal > target) {
            right--;
        } 
        else {
            left++;
        }
    }

    return "none";
}

const nums = [-2, 1, 2, 4, 7, 11];
const target = 13;

const result = twoSum(nums, target);

console.log(result);
