!function(){var n=function(n){return crypto.getRandomValues(new Uint8Array(n))},r=function(n,r,t){var o=(2<<Math.log2(n.length-1))-1,e=-~(1.6*o*r/n.length);return function(){for(var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a="";;)for(var i=t(e),l=e;l--;)if((a+=n[i[l]&o]||"").length===u)return a}},t=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:21;return r(t,o,n)}("абврпасми123",10),o=t();console.log(o)}();
//# sourceMappingURL=index.d54728e6.js.map
