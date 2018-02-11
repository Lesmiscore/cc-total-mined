/**
    Simply calculates total mined coins
    The result may differ from actual total mined coins
    halving - Halving point
    height - Block height
    initReward - Reward coins at #0
*/
function calcTotalSimply(halving, height, initReward) {
    // constants calculated by division
    const pastHalvingTimes = Math.floor(height / halving) | 0;
    const blocksSinceLastHalving = height % halving;

    // let's start calculating
    let multiplier = 0;
    for (let i = 0; i < pastHalvingTimes; i++) {
        multiplier += 1 / (2 ** i);
    }
    // mined coins until last halving point
    const minedCoinsUntilLastHalvingPoint = initReward * multiplier * halving;

    // mined coins from last halving point
    const minedCoinsFromLastHalvingPoint = (initReward / (2 ** pastHalvingTimes)) * blocksSinceLastHalving;

    const totalMined = minedCoinsFromLastHalvingPoint + minedCoinsUntilLastHalvingPoint;
    
    // that's it!
    return totalMined;
}
