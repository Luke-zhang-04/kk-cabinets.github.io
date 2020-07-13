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
"use strict";var toggleSwitch;function logout(){firebase.auth().signOut()}firebase.auth().onAuthStateChanged(function(user){toggleSwitch=document.getElementById("navbarLogin");if(user){toggleSwitch.innerHTML="Logout";toggleSwitch.addEventListener("click",logout);toggleSwitch.setAttribute("href","#");document.getElementById("navbarRecommend").style.display="block"}else{toggleSwitch.innerHTML="Login/Register";toggleSwitch.removeEventListener("click",logout);toggleSwitch.setAttribute("href","login");document.getElementById("navbarRecommend").style.display="none"}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2F1dGguanMiXSwibmFtZXMiOlsidG9nZ2xlU3dpdGNoIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJhQW9CQSxHQUFJQSxDQUFBQSxZQUFKLENBRUEsUUFBU0MsQ0FBQUEsTUFBVCxFQUFrQixDQUNkQyxRQUFRLENBQUNDLElBQVQsR0FBZ0JDLE9BQWhCLEVBRUgsQ0FFREYsUUFBUSxDQUFDQyxJQUFULEdBQWdCRSxrQkFBaEIsQ0FBbUMsU0FBU0MsSUFBVCxDQUFlLENBQzlDTixZQUFZLENBQUdPLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmLENBQ0EsR0FBSUYsSUFBSixDQUFVLENBRU5OLFlBQVksQ0FBQ1MsU0FBYixDQUF5QixRQUF6QixDQUNBVCxZQUFZLENBQUNVLGdCQUFiLENBQThCLE9BQTlCLENBQXVDVCxNQUF2QyxFQUNBRCxZQUFZLENBQUNXLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBa0MsR0FBbEMsRUFFQUosUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0ksS0FBM0MsQ0FBaURDLE9BQWpELENBQTJELE9BSTlELENBVkQsSUFVTyxDQUVIYixZQUFZLENBQUNTLFNBQWIsQ0FBeUIsZ0JBQXpCLENBQ0FULFlBQVksQ0FBQ2MsbUJBQWIsQ0FBaUMsT0FBakMsQ0FBMENiLE1BQTFDLEVBQ0FELFlBQVksQ0FBQ1csWUFBYixDQUEwQixNQUExQixDQUFrQyxPQUFsQyxFQUVBSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSSxLQUEzQyxDQUFpREMsT0FBakQsQ0FBMkQsTUFDOUQsQ0FDSixDQXBCRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogS0sgQ2FiaW5ldHNcbiAqIENvcHlyaWdodCAoQykgMjAyMCAgTHVrZSBaaGFuZywgRXRoYW4gTGltXG4gKiBcbiAqIGh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhhbmxpbTA0XG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICogXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxubGV0IHRvZ2dsZVN3aXRjaFxuXG5mdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIGNvbnNvbGUubG9nKFwiU3VjZXNzZnVsbHkgTG9nZ2VkIE91dFwiKVxufVxuXG5maXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhckxvZ2luXCIpXG4gICAgaWYgKHVzZXIpIHtcblxuICAgICAgICB0b2dnbGVTd2l0Y2guaW5uZXJIVE1MID0gXCJMb2dvdXRcIlxuICAgICAgICB0b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ291dClcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJSZWNvbW1lbmRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIsIHVzZXIucHJvdmlkZXJEYXRhKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyB1c2VyIHNpZ25lZCBpblwiKVxuICAgICAgICB0b2dnbGVTd2l0Y2guaW5uZXJIVE1MID0gXCJMb2dpbi9SZWdpc3RlclwiXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9nb3V0KVxuICAgICAgICB0b2dnbGVTd2l0Y2guc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImxvZ2luXCIpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJSZWNvbW1lbmRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxufSkiXX0=