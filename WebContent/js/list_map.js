/**
 * js实现list
 * 
 */
function List() {
    this.value = [];

    /* 添加 */
    this.add = function(obj) {
        return this.value.push(obj);
    };

    /* 大小 */
    this.size = function() {
        return this.value.length;
    };

    /* 返回指定索引的值 */
    this.get = function(index) {
        return this.value[index];
    };

    /* 删除指定索引的值 */
    this.remove = function(index) {
        this.value.splice(index,1);
        return this.value;
    };

    /* 删除全部值 */
    this.removeAll = function() {
        return this.value = [];
    };

    /* 是否包含某个对象 */
    this.constains = function(obj) {
        for ( var i in this.value) {
            if (obj == this.value[i]) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    };
    
    /* 是否包含某个对象 */
    this.getAll = function() {
        var allInfos = '';
        for ( var i in this.value) {
            if(i != (value.length-1)){
                allInfos += this.value[i]+",";
            }else{
                allInfos += this.value[i];
            }
        }
        alert(allInfos);
        return allInfos += this.value[i]+",";;
    };
    
}

/*
 * MAP对象，实现MAP功能
 *
 * 接口：
 * size()     获取MAP元素个数
 * isEmpty()    判断MAP是否为空
 * clear()     删除MAP所有元素
 * put(key, value)   向MAP中增加元素（key, value) 
 * remove(key)    删除指定KEY的元素，成功返回True，失败返回False
 * get(key)    获取指定KEY的元素值VALUE，失败返回NULL
 * element(index)   获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
 * containsKey(key)  判断MAP中是否含有指定KEY的元素
 * containsValue(value) 判断MAP中是否含有指定VALUE的元素
 * values()    获取MAP中所有VALUE的数组（ARRAY）
 * keys()     获取MAP中所有KEY的数组（ARRAY）
 *
 * 例子：
 * var map = new Map();
 *
 * map.put("key", "value");
 * var val = map.get("key")
 * ……
 *
 */
function Map() {
    this.elements = new Array();

    //获取MAP元素个数
    this.size = function() {
        return this.elements.length;
    };

    //判断MAP是否为空
    this.isEmpty = function() {
        return (this.elements.length < 1);
    };

    //删除MAP所有元素
    this.clear = function() {
        this.elements = new Array();
    };

    //向MAP中增加元素（key, value) 
    this.put = function(_key, _value) {
        this.elements.push( {
            key : _key,
            value : _value
        });
    };

    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function(_key) {
        var bln = false;
        try {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function(_key) {
        try {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    };

    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    };

    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function(_key) {
        var bln = false;
        try {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function(_value) {
        var bln = false;
        try {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function() {
        var arr = new Array();
        for (var i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };

    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function() {
        var arr = new Array();
        for (var i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    };
    
    /**   
     * 遍历Map,执行处理函数   
     *    
     * @param {Function} 回调函数 function(key,value,index){..}   
     */    
    this.each = function(fn){     
        if(typeof fn != 'function'){     
            return;     
        }     
        var len = this.elements.length;     
        for(var i=0;i<len;i++){     
            var k = this.elements[i];     
            fn(k,this.elements[i].value,i);     
        }     
    };   
    
    /**   
     * 重写toString    
     */    
    this.toString = function(){     
        var s = "{";     
        for(var i=0;i<this.elements.length;i++,s+=','){     
            var k = this.elements[i];     
            s += k+"="+this.elements[i].value;     
        }     
        s+="}";     
        return s;     
    };
}

/**
Array.prototype.remove = function(s) {     
    for (var i = 0; i < this.length; i++) {     
        if (s == this[i])     
            this.splice(i, 1);     
    }     
}; 

**/
//
//function Map() {     
//    /** 存放键的数组(遍历用到) */    
//    this.keys = new Array();     
//    /** 存放数据 */    
//    this.data = new Object();     
//         
//    /**   
//     * 放入一个键值对   
//     * @param {String} key   
//     * @param {Object} value   
//     */    
//    this.put = function(key, value) {     
//        if(this.data[key] == null){     
//            this.keys.push(key);     
//        }     
//        this.data[key] = value;     
//    };     
//         
//    /**   
//     * 获取某键对应的值   
//     * @param {String} key   
//     * @return {Object} value   
//     */    
//    this.get = function(key) {     
//        return this.data[key];     
//    };     
//         
//    /**   
//     * 删除一个键值对   
//     * @param {String} key   
//     */    
//    this.remove = function(key) {     
//        this.keys.remove(key);     
//        this.data[key] = null;     
//    };     
//         
//    /**   
//     * 遍历Map,执行处理函数   
//     *    
//     * @param {Function} 回调函数 function(key,value,index){..}   
//     */    
//    this.each = function(fn){     
//        if(typeof fn != 'function'){     
//            return;     
//        }     
//        var len = this.keys.length;     
//        for(var i=0;i<len;i++){     
//            var k = this.keys[i];     
//            fn(k,this.data[k],i);     
//        }     
//    };     
//         
//    /**   
//     * 获取键值数组(类似Java的entrySet())   
//     * @return 键值对象{key,value}的数组   
//     */    
//    this.entrys = function() {     
//        var len = this.keys.length;     
//        var entrys = new Array(len);     
//        for (var i = 0; i < len; i++) {     
//            entrys[i] = {     
//                key : this.keys[i],     
//                value : this.data[i]     
//            };     
//        }     
//        return entrys;     
//    };     
//         
//    /**   
//     * 判断Map是否为空   
//     */    
//    this.isEmpty = function() {     
//        return this.keys.length == 0;     
//    };     
//         
//    /**   
//     * 获取键值对数量   
//     */    
//    this.size = function(){     
//        return this.keys.length;     
//    };     
//         
//    /**   
//     * 重写toString    
//     */    
//    this.toString = function(){     
//        var s = "{";     
//        for(var i=0;i<this.keys.length;i++,s+=','){     
//            var k = this.keys[i];     
//            s += k+"="+this.data[k];     
//        }     
//        s+="}";     
//        return s;     
//    };
//    
//    /**   
//     * 清空   
//     */    
//    this.clear = function(){     
//    	var len = this.keys.length;     
//        for(var i=len-1;i>=0;i--){     
//            var k = this.keys[i];
//            this.remove(k);
//        }      
//    };
//}    