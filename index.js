

  /*function superbowlWin(arr) {
    if (arr.result === "W") {
        return arr.year
    }
    else {
        return undefined
    }
}

record.find(superbowlWin)*/

const superbowlWin = (record) => {
    const firstWin = record.find(season => {
        return season.result === 'W'

    })
    return !! firstWin ? firstWin.year : undefined
} 