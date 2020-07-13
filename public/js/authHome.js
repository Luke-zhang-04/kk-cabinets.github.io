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
"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var toggleSwitch;function logout(){firebase.auth().signOut()}firebase.auth().onAuthStateChanged(function(user){toggleSwitch=document.getElementById("navbarLogin");if(user){toggleSwitch.innerHTML="Logout";toggleSwitch.addEventListener("click",logout);toggleSwitch.setAttribute("href","#");document.getElementById("navbarRecommend").style.display="block";var login;firebase.database().ref("logged-in/").once("value").then(function(snapshot){login=snapshot.val()}).then(function(){if(!login){login=new Map}login[user.uid]=Date.now();firebase.database().ref("logged-in").set(_objectSpread({},login))})}else{toggleSwitch.innerHTML="Login/Register";toggleSwitch.removeEventListener("click",logout);toggleSwitch.setAttribute("href","login");document.getElementById("navbarRecommend").style.display="none"}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2F1dGhIb21lLmpzIl0sIm5hbWVzIjpbInRvZ2dsZVN3aXRjaCIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImRpc3BsYXkiLCJsb2dpbiIsImRhdGFiYXNlIiwicmVmIiwib25jZSIsInRoZW4iLCJzbmFwc2hvdCIsInZhbCIsIk1hcCIsInVpZCIsIkRhdGUiLCJub3ciLCJzZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiMjhCQW9CQSxHQUFJQSxDQUFBQSxZQUFKLENBRUEsUUFBU0MsQ0FBQUEsTUFBVCxFQUFrQixDQUNkQyxRQUFRLENBQUNDLElBQVQsR0FBZ0JDLE9BQWhCLEVBRUgsQ0FFREYsUUFBUSxDQUFDQyxJQUFULEdBQWdCRSxrQkFBaEIsQ0FBbUMsU0FBU0MsSUFBVCxDQUFlLENBQzlDTixZQUFZLENBQUdPLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmLENBQ0EsR0FBSUYsSUFBSixDQUFVLENBRU5OLFlBQVksQ0FBQ1MsU0FBYixDQUF5QixRQUF6QixDQUNBVCxZQUFZLENBQUNVLGdCQUFiLENBQThCLE9BQTlCLENBQXVDVCxNQUF2QyxFQUNBRCxZQUFZLENBQUNXLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBa0MsR0FBbEMsRUFFQUosUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0ksS0FBM0MsQ0FBaURDLE9BQWpELENBQTJELE9BQTNELENBSUEsR0FBSUMsQ0FBQUEsS0FBSixDQUNBWixRQUFRLENBQUNhLFFBQVQsR0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCLEVBQXNDQyxJQUF0QyxDQUEyQyxPQUEzQyxFQUFvREMsSUFBcEQsQ0FBeUQsU0FBU0MsUUFBVCxDQUFtQixDQUN4RUwsS0FBSyxDQUFHSyxRQUFRLENBQUNDLEdBQVQsRUFDWCxDQUZELEVBRUdGLElBRkgsQ0FFUSxVQUFLLENBQ1QsR0FBSSxDQUFDSixLQUFMLENBQVksQ0FDUkEsS0FBSyxDQUFHLEdBQUlPLENBQUFBLEdBQ2YsQ0FDRFAsS0FBSyxDQUFDUixJQUFJLENBQUNnQixHQUFOLENBQUwsQ0FBa0JDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQixDQUNBdEIsUUFBUSxDQUFDYSxRQUFULEdBQW9CQyxHQUFwQixDQUF3QixXQUF4QixFQUFxQ1MsR0FBckMsa0JBQ09YLEtBRFAsRUFHSCxDQVZELENBWUgsQ0F2QkQsSUF1Qk8sQ0FFSGQsWUFBWSxDQUFDUyxTQUFiLENBQXlCLGdCQUF6QixDQUNBVCxZQUFZLENBQUMwQixtQkFBYixDQUFpQyxPQUFqQyxDQUEwQ3pCLE1BQTFDLEVBQ0FELFlBQVksQ0FBQ1csWUFBYixDQUEwQixNQUExQixDQUFrQyxPQUFsQyxFQUVBSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxLQUEzQyxDQUFpREMsT0FBakQsQ0FBMkQsTUFDOUQsQ0FDSixDQWpDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogS0sgQ2FiaW5ldHNcbiAqIENvcHlyaWdodCAoQykgMjAyMCAgTHVrZSBaaGFuZywgRXRoYW4gTGltXG4gKiBcbiAqIGh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhhbmxpbTA0XG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICogXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxubGV0IHRvZ2dsZVN3aXRjaFxuXG5mdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIGNvbnNvbGUubG9nKFwiU3VjZXNzZnVsbHkgTG9nZ2VkIE91dFwiKVxufVxuXG5maXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhckxvZ2luXCIpXG4gICAgaWYgKHVzZXIpIHtcblxuICAgICAgICB0b2dnbGVTd2l0Y2guaW5uZXJIVE1MID0gXCJMb2dvdXRcIlxuICAgICAgICB0b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ291dClcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJSZWNvbW1lbmRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIsIHVzZXIucHJvdmlkZXJEYXRhKVxuXG4gICAgICAgIGxldCBsb2dpblxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxvZ2dlZC1pbi9cIikub25jZShcInZhbHVlXCIpLnRoZW4oZnVuY3Rpb24oc25hcHNob3QpIHtcbiAgICAgICAgICAgIGxvZ2luID0gc25hcHNob3QudmFsKClcbiAgICAgICAgfSkudGhlbihfID0+IHtcbiAgICAgICAgICAgIGlmICghbG9naW4pIHtcbiAgICAgICAgICAgICAgICBsb2dpbiA9IG5ldyBNYXAoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9naW5bdXNlci51aWRdID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJsb2dnZWQtaW5cIikuc2V0KHsgLy9wdXNoIHRvIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgLi4ubG9naW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHVzZXIgc2lnbmVkIGluXCIpXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5pbm5lckhUTUwgPSBcIkxvZ2luL1JlZ2lzdGVyXCJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2dvdXQpXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwibG9naW5cIilcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclJlY29tbWVuZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG59KSJdfQ==
