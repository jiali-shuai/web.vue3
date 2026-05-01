
 export function getQueryString(name) {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r != null) {
      return  unescape(r[2]);
  } else {
      return null
  }
}

export const getLocal = (name) => {
  return localStorage.getItem(name)
}

export const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}

export const tdist = {

  650100: ["新疆工程学院", "650000"],
  650106: ["其他校区", "650100"],
  650105: ["南昌路校区", "650100"],
  650104: ["主校区", "650100"],
  650000: ["新疆", "1"],


 
}

tdist.getLev1 = function() {
  for (var t = [], e = 1; e < 100; e++) {
      var i = "0000";
      i = e < 10 ? "0" + e + i : e + i;
      var n = this[i];
      "undefined" != typeof n && t.push({
          id: i,
          text: n[0]
      })
  }
  return t
}

tdist.getLev2 = function(t) {
  if ("" == t)
      return [];
  for (var e = [], i = 1; i < 100; i++) {
      var n = t.substr(0, 2);
      n += i < 10 ? "0" + i + "00" : i + "00";
      var r = this[n];
      "undefined" != typeof r && e.push({
          id: n,
          text: r[0]
      })
  }
  return e
}

tdist.getLev3 = function(t) {
  if ("" == t)
      return [];
  for (var e = [], i = 1; i < 100; i++) {
      var n = t.substr(0, 4);
      n += i < 10 ? "0" + i : i;
      var r = this[n];
      "undefined" != typeof r && e.push({
          id: n,
          text: r[0]
      })
  }
  return e
}


// tdist.getParent = function(t) {
//   var e = this[t][1];
//   return this[e]
// }

// tdist.getLev1Html = function(t) {
//   var e = "请选择";
//   t && (e = t);
//   for (var i = this.getLev1(), n = ["<option value=''>" + e + "</option>"], r = 0, o = i.length; r < o; r++) {
//       var v = i[r];
//       n.push('<option value="' + v.id + '">' + v.text + "</option>")
//   }
//   return n.join("")
// }

// tdist.getLev2Html = function(t, e) {
//   var i = "请选择";
//   e && (i = e);
//   for (var n = this.getLev2(t), r = ["<option value=''>" + i + "</option>"], o = 0, v = n.length; o < v; o++) {
//       var u = n[o];
//       r.push('<option value="' + u.id + '">' + u.text + "</option>")
//   }
//   return r.join("")
// }

// tdist.getLev3Html = function(t) {
//   for (var e = this.getLev3(t), i = ["<option value=''>请选择</option>"], n = 0, r = e.length; n < r; n++) {
//       var o = e[n];
//       i.push('<option value="' + o.id + '">' + o.text + "</option>")
//   }
//   return i.join("")
// }

// 图片前缀方法
export const prefix = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `http://backend-api-01.newbee.ltd${url}`
    return url
  }
}
