//Objective is to maximize the amount of rain water that can be held in an
//elevation map.

let height = [0,1,0,2,1,0,1,3,2,1,2,1]


//O(n) solution that uses dynamic programming to continuously update the
//max left and right heights, then adds on the difference between the min
//between the pointers and its respective max to the result.

let leftMax = -Infinity
let rightMax = -Infinity
let result = 0
let left = 0
let right = height.length - 1

while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (height[left] < height[right]) {
        result += leftMax - height[left++]
    } else {
        result += rightMax - height[right--]
    }
}

return result