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
    let multiplyer = 0;
    for (let i = 0; i < pastHalvingTimes; i++) {
        multiplyer += 1 / (2 ** i);
    }
    // mined coins until last halving point
    const minedCoinsUntilLastHalvingPoint = initReward * multiplyer * halving;

    // mined coins from last halving point
    const minedCoinsFromLastHalvingPoint = (initReward / (2 ** (pastHalvingTimes + 1))) * blocksSinceLastHalving;

    const totalMined = minedCoinsFromLastHalvingPoint + minedCoinsUntilLastHalvingPoint;
    
    // that's it!
    return totalMined;
}
