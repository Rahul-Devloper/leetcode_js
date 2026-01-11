
// Code


// Testcase
// Testcase
// Test Result
// 1423. Maximum Points You Can Obtain from Cards
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.


/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    console.log(cardPoints)
    let leftSum = 0
    let rightSum = 0
    let totalSum = 0
    let rightIndex = cardPoints.length - 1

    for(let i = 0; i < k; i++){
        leftSum += cardPoints[i]
    }
    for(let i = k - 1; i >= 0; i--){
        leftSum-=cardPoints[i]
        rightSum+= cardPoints[rightIndex]
        totalSum = Math.max(totalSum, leftSum + rightSum)
        rightIndex --
        
    }
    return totalSum

};

maxScore([1, 2, 3, 4, 5, 6, 1], 3)