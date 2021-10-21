/*706. Design HashMap*/

//1.Solution
/*var MyHashMap = function() {
    this.mySet = Array.from({length:1000}, x=>[]);
    this.mapFn = function(key){
    	return key%1000;
    }
};

MyHashMap.prototype.put = function(key, value) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if(index===-1) arr.push(key, ''+value);
    else arr.splice(index+1, 1, ''+value);
};

MyHashMap.prototype.get = function(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if(index!==-1) return +arr[index+1];
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if(index!==-1) arr.splice(index, 2);
};
*/


//2.Solution - Most votes solution
var MyHashMap = function() {
    this._keys = [];
    this._val = [];
};
MyHashMap.prototype.put = function(key, value) {
    if (this._keys[key] === undefined) {
        this._val.push(value);
        this._keys[key] = this._val.length - 1;
    } else {
      this._val[this._keys[key]] = value;
    }
};
MyHashMap.prototype.get = function(key) {
    if (this._keys[key] === undefined) {
        return -1;
    } else {
      return this._val[this._keys[key]];
    }
};
MyHashMap.prototype.remove = function(key) {
    if (this._keys[key] !== undefined) {
      this._val[this._keys[key]] = undefined;
      this._keys[key] = undefined;
    }
};
