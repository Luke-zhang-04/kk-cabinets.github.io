/**
 * KK Cabinets
 * @copyright (C) 2020 Luke Zhang, Ethan Lim
 * 
 * @author Luke Zhang, Ethan Lim
 * 
 * https://luke-zhang-04.github.io/
 * https://github.com/ethanlim04
 * 
 * @license GPL-3.0
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
"use strict";function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function(){};return{s:F,n:function n(){if(i>=o.length)return{done:!0};return{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=!0,didErr=!1,err;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=!0;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}var data=new Map;var columnNum=0;var columns=$("#row").find(".responsive_column");var imgURL;var storageRef=storage.ref("countertops");function contains(target,array){var _iterator=_createForOfIteratorHelper(array),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){i=_step.value;if(target===i){return!0}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return!1}function arrayRemove(arr,value){return arr.filter(function(ele){return ele!==value})}db.collection("countertops").get().then(function(snapshot){snapshot.docs.forEach(function(doc){data[doc.id]=doc.data()});display_batch(data)});function display_batch(data){var _loop=function(key){imgURL=storageRef.child(data[key]["file"]);var column=columns[columnNum%4];var id=key;imgURL.getDownloadURL().then(function(url){$(column).append("<div class=\"image_container\" id="+id+"><img onclick=\"expand("+id+")\"src=\""+url+"\"/></div>");var element=$("#"+id);element.append("<div class=\"details\"><p>"+data[id]["caption"]+"<p></div>")});columnNum++};for(var key in data){_loop(key)}$("#loading").css("display","none")}function expand(key){var element=document.getElementById(key);var container=element.getElementsByClassName("details")[0];if(container.style.maxHeight){container.style.maxHeight=null}else{container.style.maxHeight=container.scrollHeight+"px"}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2NvdW50ZXJ0b3BzLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJNYXAiLCJjb2x1bW5OdW0iLCJjb2x1bW5zIiwiJCIsImZpbmQiLCJpbWdVUkwiLCJzdG9yYWdlUmVmIiwic3RvcmFnZSIsInJlZiIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXJyYXkiLCJpIiwiYXJyYXlSZW1vdmUiLCJhcnIiLCJ2YWx1ZSIsImZpbHRlciIsImVsZSIsImRiIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImRvY3MiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJkaXNwbGF5X2JhdGNoIiwia2V5IiwiY2hpbGQiLCJjb2x1bW4iLCJnZXREb3dubG9hZFVSTCIsInVybCIsImFwcGVuZCIsImVsZW1lbnQiLCJjc3MiLCJleHBhbmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiZzJDQW9CQSxHQUFJQSxDQUFBQSxJQUFJLENBQUcsR0FBSUMsQ0FBQUEsR0FBZixDQUNBLEdBQUlDLENBQUFBLFNBQVMsQ0FBRyxDQUFoQixDQUNBLEdBQUlDLENBQUFBLE9BQU8sQ0FBR0MsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxJQUFWLENBQWUsb0JBQWYsQ0FBZCxDQUNBLEdBQUlDLENBQUFBLE1BQUosQ0FDQSxHQUFJQyxDQUFBQSxVQUFVLENBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosQ0FBakIsQ0FHQSxRQUFTQyxDQUFBQSxRQUFULENBQWtCQyxNQUFsQixDQUEwQkMsS0FBMUIsQ0FBaUMsMENBQ25CQSxLQURtQixZQUM3QiwrQ0FBaUIsQ0FBWkMsQ0FBWSxhQUNiLEdBQUlGLE1BQU0sR0FBS0UsQ0FBZixDQUFrQixDQUNkLFFBQ0gsQ0FDSixDQUw0QixtREFNN0IsUUFDSCxDQUdELFFBQVNDLENBQUFBLFdBQVQsQ0FBcUJDLEdBQXJCLENBQTBCQyxLQUExQixDQUFpQyxDQUM3QixNQUFPRCxDQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxTQUFTQyxHQUFULENBQWEsQ0FDM0IsTUFBT0EsQ0FBQUEsR0FBRyxHQUFLRixLQUNsQixDQUZNLENBR1YsQ0FHREcsRUFBRSxDQUFDQyxVQUFILENBQWMsYUFBZCxFQUE2QkMsR0FBN0IsR0FBbUNDLElBQW5DLENBQXdDLFNBQUNDLFFBQUQsQ0FBYyxDQUNsREEsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWQsQ0FBc0IsU0FBQUMsR0FBRyxDQUFJLENBQ3pCMUIsSUFBSSxDQUFDMEIsR0FBRyxDQUFDQyxFQUFMLENBQUosQ0FBZUQsR0FBRyxDQUFDMUIsSUFBSixFQUNsQixDQUZELEVBR0E0QixhQUFhLENBQUM1QixJQUFELENBQ2hCLENBTEQsRUFRQSxRQUFTNEIsQ0FBQUEsYUFBVCxDQUF1QjVCLElBQXZCLENBQTZCLG9CQUNoQjZCLEdBRGdCLEVBRXJCdkIsTUFBTSxDQUFHQyxVQUFVLENBQUN1QixLQUFYLENBQWlCOUIsSUFBSSxDQUFDNkIsR0FBRCxDQUFKLENBQVUsTUFBVixDQUFqQixDQUFULENBQ0EsR0FBSUUsQ0FBQUEsTUFBTSxDQUFHNUIsT0FBTyxDQUFDRCxTQUFTLENBQUMsQ0FBWCxDQUFwQixDQUNBLEdBQUl5QixDQUFBQSxFQUFFLENBQUdFLEdBQVQsQ0FDQXZCLE1BQU0sQ0FBQzBCLGNBQVAsR0FBd0JWLElBQXhCLENBQTZCLFNBQVNXLEdBQVQsQ0FBYyxDQUV2QzdCLENBQUMsQ0FBQzJCLE1BQUQsQ0FBRCxDQUFVRyxNQUFWLENBQ0kscUNBQXVDUCxFQUF2QyxDQUE0Qyx5QkFBNUMsQ0FBd0VBLEVBQXhFLENBQTZFLFdBQTdFLENBQTBGTSxHQUExRixDQUFnRyxZQURwRyxFQUtBLEdBQUlFLENBQUFBLE9BQU8sQ0FBRy9CLENBQUMsQ0FBQyxJQUFNdUIsRUFBUCxDQUFmLENBR0FRLE9BQU8sQ0FBQ0QsTUFBUixDQUNJLDZCQUErQmxDLElBQUksQ0FBQzJCLEVBQUQsQ0FBSixDQUFTLFNBQVQsQ0FBL0IsQ0FBcUQsV0FEekQsQ0FHSCxDQWJELEVBY0F6QixTQUFTLEVBbkJZLEVBQ3pCLElBQUssR0FBSTJCLENBQUFBLEdBQVQsR0FBZ0I3QixDQUFBQSxJQUFoQixDQUFzQixPQUFiNkIsR0FBYSxDQW1CckIsQ0FFRHpCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2dDLEdBQWQsQ0FBa0IsU0FBbEIsQ0FBNkIsTUFBN0IsQ0FDSCxDQUdELFFBQVNDLENBQUFBLE1BQVQsQ0FBZ0JSLEdBQWhCLENBQXFCLENBQ2pCLEdBQUlNLENBQUFBLE9BQU8sQ0FBR0csUUFBUSxDQUFDQyxjQUFULENBQXdCVixHQUF4QixDQUFkLENBQ0EsR0FBSVcsQ0FBQUEsU0FBUyxDQUFHTCxPQUFPLENBQUNNLHNCQUFSLENBQStCLFNBQS9CLEVBQTBDLENBQTFDLENBQWhCLENBQ0EsR0FBSUQsU0FBUyxDQUFDRSxLQUFWLENBQWdCQyxTQUFwQixDQUE4QixDQUMxQkgsU0FBUyxDQUFDRSxLQUFWLENBQWdCQyxTQUFoQixDQUE0QixJQUMvQixDQUZELElBRU8sQ0FDSEgsU0FBUyxDQUFDRSxLQUFWLENBQWdCQyxTQUFoQixDQUE0QkgsU0FBUyxDQUFDSSxZQUFWLENBQXlCLElBQ3hELENBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEtLIENhYmluZXRzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgIEx1a2UgWmhhbmcsIEV0aGFuIExpbVxuICogXG4gKiBodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXRoYW5saW0wNFxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIFxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqIFxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmxldCBkYXRhID0gbmV3IE1hcFxubGV0IGNvbHVtbk51bSA9IDBcbmxldCBjb2x1bW5zID0gJChcIiNyb3dcIikuZmluZChcIi5yZXNwb25zaXZlX2NvbHVtblwiKVxubGV0IGltZ1VSTFxubGV0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZihcImNvdW50ZXJ0b3BzXCIpXG5cbi8vaWYgYXJyYXkgY29uYWlucyB0YXJnZXRcbmZ1bmN0aW9uIGNvbnRhaW5zKHRhcmdldCwgYXJyYXkpIHtcbiAgICBmb3IgKGkgb2YgYXJyYXkpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gaSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuLy9yZW1vdmUgZWxlbWVudCBmcm9tIGFycmF5XG5mdW5jdGlvbiBhcnJheVJlbW92ZShhcnIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgcmV0dXJuIGVsZSAhPT0gdmFsdWVcbiAgICB9KVxufVxuXG4vL2dldCBjb3VudGVydG9wcyBmcm9tIGZpcmVzdG9yZVxuZGIuY29sbGVjdGlvbihcImNvdW50ZXJ0b3BzXCIpLmdldCgpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgIGRhdGFbZG9jLmlkXSA9IGRvYy5kYXRhKClcbiAgICB9KVxuICAgIGRpc3BsYXlfYmF0Y2goZGF0YSlcbn0pXG5cbi8vaGFuZGxlIGRhdGEgYW5kIGRpc3BsYXkgaW1hZ2VzIGFjY29yZGluZ2x5XG5mdW5jdGlvbiBkaXNwbGF5X2JhdGNoKGRhdGEpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpbWdVUkwgPSBzdG9yYWdlUmVmLmNoaWxkKGRhdGFba2V5XVtcImZpbGVcIl0pIC8vaW1hZ2UgdXJsXG4gICAgICAgIGxldCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbk51bSU0XSAvL2NvbHVtbiB0byBhcHBlbmQgaW1hZ2UgdG9cbiAgICAgICAgbGV0IGlkID0ga2V5IC8vZm9yIGFzeW5jaHJvbnVzIGdldERvd25sb2FkVVJMXG4gICAgICAgIGltZ1VSTC5nZXREb3dubG9hZFVSTCgpLnRoZW4oZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAvL2FwcGVuZCBpbWFnZSB0byBjb2x1bW5cbiAgICAgICAgICAgICQoY29sdW1uKS5hcHBlbmQoIFxuICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwiaW1hZ2VfY29udGFpbmVyXFxcIiBpZD1cIiArIGlkICsgXCI+PGltZyBvbmNsaWNrPVxcXCJleHBhbmQoXCIgKyBpZCArIFwiKVxcXCJzcmM9XFxcIlwiKyB1cmwgKyBcIlxcXCIvPjwvZGl2PlwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vYXR0YWNoIGluZm9ybWF0aW9uIHRvIGltYWdlXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9ICQoXCIjXCIgKyBpZCkgLy9zaG9ydGN1dCBmb3IgdGFyZ2V0IGVsZW1lbnRcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5mb3JtYXRpb24gdG8gZWxlbWVudFxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj48cD5cIiArIGRhdGFbaWRdW1wiY2FwdGlvblwiXSArIFwiPHA+PC9kaXY+XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgY29sdW1uTnVtKytcbiAgICB9XG4gICAgLy9yZW1vdmUgbG9hZGluZyBnaWZcbiAgICAkKFwiI2xvYWRpbmdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbn1cblxuLy9tYWtlcyBpbmZvcm1hdGlvbiBkcm9wIGRvd25cbmZ1bmN0aW9uIGV4cGFuZChrZXkpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSlcbiAgICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGV0YWlsc1wiKVswXVxuICAgIGlmIChjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0KXtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufSJdfQ==