const blocks = (function (global) {
    function fetchBlockHeightInsight(url) {
        return fetch(url + "/sync").then((r) => r.json()).then((b) => b.blockChainHeight);
    }
    return {
        insight: fetchBlockHeightInsight
    };
})(this);
