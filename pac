const RULES = [
    /jzapi-offline.baidu.com/,
    /duzhanread.cdn.bcebos.com/,
    /duzhanread.bj.bcebos.com/,
    /isite.baidu.com/,
    /aisite.wejianzhan.com/,
    /sjh-preonline.baidu.com/
];

function FindProxyForURL(url) {
    for (let i = 0; i < RULES.length; i++) {
        const rule = RULES[i];
        if (rule.test(url)) {
            return 'PROXY 127.0.0.1:8899';
        }
    }
    return 'DIRECT';
}
