#!/usr/bin/env node
(()=>{var n={9076:n=>{function e(n){return"number"==typeof n||!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n)}n.exports=function(n,o){o||(o={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof o.unknown&&(t.unknownFn=o.unknown),"boolean"==typeof o.boolean&&o.boolean?t.allBools=!0:[].concat(o.boolean).filter(Boolean).forEach((function(n){t.bools[n]=!0}));var r={};Object.keys(o.alias||{}).forEach((function(n){r[n]=[].concat(o.alias[n]),r[n].forEach((function(e){r[e]=[n].concat(r[n].filter((function(n){return e!==n})))}))})),[].concat(o.string).filter(Boolean).forEach((function(n){t.strings[n]=!0,r[n]&&(t.strings[r[n]]=!0)}));var s=o.default||{},i={_:[]};Object.keys(t.bools).forEach((function(n){l(n,void 0!==s[n]&&s[n])}));var a=[];function l(n,o,s){if(!s||!t.unknownFn||function(n,e){return t.allBools&&/^--[^=]+$/.test(e)||t.strings[n]||t.bools[n]||r[n]}(n,s)||!1!==t.unknownFn(s)){var a=!t.strings[n]&&e(o)?Number(o):o;c(i,n.split("."),a),(r[n]||[]).forEach((function(n){c(i,n.split("."),a)}))}}function c(n,e,o){for(var r=n,s=0;s<e.length-1;s++){if("__proto__"===(i=e[s]))return;void 0===r[i]&&(r[i]={}),r[i]!==Object.prototype&&r[i]!==Number.prototype&&r[i]!==String.prototype||(r[i]={}),r[i]===Array.prototype&&(r[i]=[]),r=r[i]}var i;"__proto__"!==(i=e[e.length-1])&&(r!==Object.prototype&&r!==Number.prototype&&r!==String.prototype||(r={}),r===Array.prototype&&(r=[]),void 0===r[i]||t.bools[i]||"boolean"==typeof r[i]?r[i]=o:Array.isArray(r[i])?r[i].push(o):r[i]=[r[i],o])}function u(n){return r[n].some((function(n){return t.bools[n]}))}-1!==n.indexOf("--")&&(a=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var f=0;f<n.length;f++){var p=n[f];if(/^--.+=/.test(p)){var d=p.match(/^--([^=]+)=([\s\S]*)$/),b=d[1],m=d[2];t.bools[b]&&(m="false"!==m),l(b,m,p)}else if(/^--no-.+/.test(p))l(b=p.match(/^--no-(.+)/)[1],!1,p);else if(/^--.+/.test(p))b=p.match(/^--(.+)/)[1],void 0===(y=n[f+1])||/^-/.test(y)||t.bools[b]||t.allBools||r[b]&&u(b)?/^(true|false)$/.test(y)?(l(b,"true"===y,p),f++):l(b,!t.strings[b]||"",p):(l(b,y,p),f++);else if(/^-[^-]+/.test(p)){for(var v=p.slice(1,-1).split(""),g=!1,h=0;h<v.length;h++){var y;if("-"!==(y=p.slice(h+2))){if(/[A-Za-z]/.test(v[h])&&/=/.test(y)){l(v[h],y.split("=")[1],p),g=!0;break}if(/[A-Za-z]/.test(v[h])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(y)){l(v[h],y,p),g=!0;break}if(v[h+1]&&v[h+1].match(/\W/)){l(v[h],p.slice(h+2),p),g=!0;break}l(v[h],!t.strings[v[h]]||"",p)}else l(v[h],y,p)}b=p.slice(-1)[0],g||"-"===b||(!n[f+1]||/^(-|--)[^-]/.test(n[f+1])||t.bools[b]||r[b]&&u(b)?n[f+1]&&/^(true|false)$/.test(n[f+1])?(l(b,"true"===n[f+1],p),f++):l(b,!t.strings[b]||"",p):(l(b,n[f+1],p),f++))}else if(t.unknownFn&&!1===t.unknownFn(p)||i._.push(t.strings._||!e(p)?p:Number(p)),o.stopEarly){i._.push.apply(i._,n.slice(f+1));break}}return Object.keys(s).forEach((function(n){var e,o,t;e=i,o=n.split("."),t=e,o.slice(0,-1).forEach((function(n){t=t[n]||{}})),o[o.length-1]in t||(c(i,n.split("."),s[n]),(r[n]||[]).forEach((function(e){c(i,e.split("."),s[n])})))})),o["--"]?(i["--"]=new Array,a.forEach((function(n){i["--"].push(n)}))):a.forEach((function(n){i._.push(n)})),i}},2328:n=>{"use strict";n.exports=require("./envinfo")}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var s=e[t]={exports:{}};return n[t](s,s.exports,o),s.exports}(()=>{"use strict";var n=o(9076)(process.argv.slice(2)),e="7.13.0";n.console=!0,n.help||n._.indexOf("help")>-1?console.log(`\n  ,,',                                  ,,             ,,,,,,           ,',,\n ,,,                                                  ,,,                  ,,,\n ,,       ,,,,,    ,,,,,,   ,,,     ,,  ,,  .,,,,,,   ,,,,,,,   ,,,,,       ,,\n ,,     ,,    ,,  ,,,   ,,,  ,,    ,,,  ,,  ,,,   ,,, ,,      ,,,   ,,,     ,,\n ,,,   ,,     .,, ,,,    ,,  ,,,   ,,   ,,  ,,,    ,, ,,     ,,      ,,     ,,,\n ,,    ,,,,,,,,,, ,,,    ,,   ,,  ,,    ,,  ,,,    ,, ,,     ,,      ,,     ,,\n ,,    ,,,        ,,,    ,,    ,,,,,    ,,  ,,,    ,, ,,     ,,,    ,,,     ,,\n ,,      ,,,,,,,  ,,,    ,,     ,,,     ,,  ,,,    ,, ,,       ,,,,,,,      ,,\n ,,,                                                                       ,,,\n  ,,,'                                                                  ',,,\n\n  VERSION: ${e}\n\n  USAGE:\n\n    \`envinfo\` || \`npx envinfo\`\n\n  OPTIONS:\n\n    --system               Print general system info such as OS, CPU, Memory and Shell\n    --browsers             Get version numbers of installed web browsers\n    --SDKs                 Get platforms, build tools and SDKs of iOS and Android\n    --IDEs                 Get version numbers of installed IDEs\n    --languages            Get version numbers of installed languages such as Java, Python, PHP, etc\n    --managers             Get version numbers of installed package/dependency managers\n    --monorepos            Get monorepo tools\n    --binaries             Get version numbers of node, npm, watchman, etc\n    --npmPackages          Get version numbers of locally installed npm packages - glob, string, or comma delimited list\n    --npmGlobalPackages    Get version numbers of globally installed npm packages\n\n    --duplicates           Mark duplicate npm packages inside parentheses eg. (2.1.4)\n    --fullTree             Traverse entire node_modules dependency tree, not just top level\n\n    --markdown             Print output in markdown format\n    --json                 Print output in JSON format\n    --console              Print to console (defaults to on for CLI usage, off for programmatic usage)\n    --showNotFound         Don't filter out values marked 'Not Found'\n    --title                Give your report a top level title ie 'Environment Report'\n\n    --clipboard            *Removed - use clipboardy or clipboard-cli directly*\n  `):n.version||n.v||n._.indexOf("version")>-1?console.log(e):o(2328).cli(n)})(),module.exports={}})();