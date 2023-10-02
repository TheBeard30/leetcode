/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map_1 = new Map();
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        const count = map_1.get(c);
        if(!count){
            map_1.set(c,1);
        }else{
            map_1.set(c,count + 1);
        }
    }

    const map_2 = new Map();
    for(let i = 0; i < t.length; i++){
        const c = t[i];
        const count = map_2.get(c);
        if(!count){
            map_2.set(c,1);
        }else{
            map_2.set(c,count + 1);
        }
    }

    if(map_1.size != map_2.size)return false;

    for(let key of map_1.keys()){
        if(map_1.get(key) != map_2.get(key)){
            return false;
        }
    }
    return true;
};

/**
 * 需要定义一个多大的数组呢，定一个数组叫做record，大小为26 就可以了，初始化为0，因为字符a到字符z的ASCII也是26个连续的数值。
 * 只需要将 s[i] - ‘a’ 所在的元素做+1 操作即可，并不需要记住字符a的ASCII，只要求出一个相对数值就可以了。
 * 那看一下如何检查字符串t中是否出现了这些字符，同样在遍历字符串t的时候，对t中出现的字符映射哈希表索引上的数值再做-1的操作。
 * 那么最后检查一下，record数组如果有的元素不为零0，说明字符串s和t一定是谁多了字符或者谁少了字符，return false。
 * @param {*} s 
 * @param {*} t 
 * @returns 
 */
function isAnagram_1(s, t) {
    if (s.length !== t.length) return false;
    let helperArr = new Array(26).fill(0);
    let pivot = 'a'.charCodeAt(0);
    for (let i = 0, length = s.length; i < length; i++) {
        helperArr[s.charCodeAt(i) - pivot]++;
        helperArr[t.charCodeAt(i) - pivot]--;
    }
    return helperArr.every(i => i === 0);
};

console.log(isAnagram('rat','car'));