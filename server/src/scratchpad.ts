/* eslint-disable @typescript-eslint/no-unused-vars */

// Promises

const promiseNum = Promise.resolve(3)
// const invalid = promiseNum + 5
const promiseNumPlusFive = promiseNum.then(num => num + 5)
const promiseWithExceptionHandler = promiseNum.catch(err => console.error(err))

const multiplePromises = [promiseNum, promiseNumPlusFive]
const promisesCombined = Promise.all(multiplePromises)
const newPromise = promisesCombined.then(nums => nums[0] + nums[1])

function doStuffWithPromises() {
  const promises = []
  for (let i = 0; i < 10; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const randomSeconds = Math.ceil(Math.random() * 5)
        setTimeout(() => {
          console.log(`finishing promise iteration ${i}`)
          resolve(randomSeconds)
        }, randomSeconds)
      })
    )
  }
  return Promise.all(promises)
}

async function asyncDoStuffWithPromises() {
  const nums: number[] = []
  for (let i = 0; i < 10; i++) {
    nums.push(
      await new Promise((resolve, reject) => {
        const randomSeconds = Math.ceil(Math.random() * 5)
        setTimeout(() => {
          console.log(`finishing promise iteration ${i}`)
          resolve(randomSeconds)
        }, randomSeconds)
      })
    )
  }
  return nums.reduce((sum, num) => sum + num, 0)
}
