/// <reference path="bundle/main.d.ts" />
/// <reference path="typings/index.d.ts" />

import {Environment, FileSystemLoader} from 'nunjucks'

var nunjucks = new Environment(new FileSystemLoader(__dirname), { 
    autoescape: false, 
    throwOnUndefined: true,
    tags: {
        blockStart: '<%',
        blockEnd: '%>',
        variableStart: '<$',
        variableEnd: '$>',
        commentStart: '<#',
        commentEnd: '#>'
    }
});        
