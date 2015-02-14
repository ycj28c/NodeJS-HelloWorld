//node.js提供一个Buffer类用于转换不同编码的字符串。目前支持三种类型：'ascii'，'utf8'与'binary'。详见这里
var Buffer = require('buffer').Buffer,  
buf = new Buffer(256),  
len = buf.write('\u00bd + \u00bc = \u00be', 0);  
console.log(len + " bytes: " + buf.toString('utf8', 0, len)); 