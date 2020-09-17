//Java Solution

class Solution {
    public int trap(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int result = 0;
        
        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            
            if (height[left] < height[right]) {
                result += leftMax - height[left++];
            } else {
                result += rightMax - height[right--];
            }
        }
        
        return result;
    }
}