/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

    如果可以，返回 true ；否则返回 false 。

    magazine 中的每个字符只能在 ransomNote 中使用一次。
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const array = new Array(26).fill(0);
    const base = 'a'.charCodeAt();
    for(let s of magazine){
        array[s.charCodeAt() - base]++;
    }

    for(let s of ransomNote){
        const index = s.charCodeAt() - base;
        if(!array[index]) return false;
        array[index]--;
    }
    return true;
};