export function threeElementsHighestProduct(nums: number[]): number {
    if (nums.length < 3) {
        throw "Array should contain atleast 3 elements"
    }
    const highestThree = findHighestThree(nums)
    console.log("Highest three values of array", highestThree)
    const lowestTwo = findLowestTwo(nums)
    console.log("Lowest Two values of array", lowestTwo)
    const product1 = highestThree[0] * highestThree[1] * highestThree[2];
    const product2 = highestThree[0] * lowestTwo[0] * lowestTwo[1];
    console.log("Product of 3 max values", product1)
    console.log("Product of 2 lowest and 1 max value", product2);
    return Math.max(product1, product2)
};

function findHighestThree(nums: number[]): number[] {
    const n = nums.length
    let firstHighest = -Infinity, secondHighest = -Infinity, thirdHighest = -Infinity;
    for (let i = 0; i < n; i++) {
        if (firstHighest <= nums[i]) {
            thirdHighest = secondHighest
            secondHighest = firstHighest
            firstHighest = nums[i];
        }
        else if (secondHighest <= nums[i] && nums[i] <= firstHighest) {
            thirdHighest = secondHighest
            secondHighest = nums[i]
        }
        else if (thirdHighest <= nums[i] && nums[i] <= secondHighest) {
            thirdHighest = nums[i]
        }
    }
    return [firstHighest, secondHighest, thirdHighest]
}

function findLowestTwo(nums: number[]): number[] {
    const n = nums.length;
    let firstLowest = Infinity, secondLowest = Infinity;
    for (let i = 0; i < n; i++) {
        if (firstLowest >= nums[i]) {
            secondLowest = firstLowest;
            firstLowest = nums[i]
        } else if (secondLowest >= nums[i] && nums[i] >= firstLowest) {
            secondLowest = nums[i]
        }
    }
    return [firstLowest, secondLowest]
}
try {
    console.log("highest product of 3 elements in this array", threeElementsHighestProduct([-9, -8]))
}
catch (error) {
    console.error(error)
}
