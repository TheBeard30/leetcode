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

console.log(isAnagram('rat','car'));