/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    stores = {};
    storet = {};
    for(let i=0;i<s.length;i++){
        charS = s[i];
        charT = t[i];
        if(stores[charS] && stores[charS] !== charT)return false;
        if(storet[charT] && storet[charT] !== charS)return false;
        stores[charS] = charT;
        storet[charT] = charS;
    }
    return true
};