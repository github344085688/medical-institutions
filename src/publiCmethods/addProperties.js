/**
 * Created by admin on 2017/12/29.
 */
export default function () {
  return new class ToStr {
    strMapToObj(val) {
      let obj = Object.create(null);
      for (let [k, v] of val) {
        obj[k] = v;
      }
      return obj;
    }

    objToStrMap(val) {
      let strMap = new Map();
      for (let k of Object.keys(val)) {
        strMap.set(k, val[k]);
      }
      return strMap;
    }

    constructor(data) {
      this.data = data
    }

  }

}

