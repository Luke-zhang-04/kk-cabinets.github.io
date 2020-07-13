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
"use strict";var state="login";var provider=new firebase.auth.GoogleAuthProvider;var windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;firebase.auth().onAuthStateChanged(function(user){if(user){}});function googleSignin(){var err=!1;firebase.auth().signInWithPopup(provider).then(function(result){result.credential.accessToken;result.user})["catch"](function(error){var errorCode=error.code;var errorMessage=error.message;window.alert("ERROR! Code: "+errorCode+"\nInfo: "+errorMessage);err=!0}).then(function(){firebase.auth().onAuthStateChanged(function(user){if(user&&!err){var userId=firebase.auth().currentUser.uid;firebase.database().ref("/users/"+userId).once("value").then(function(snapshot){if(!snapshot.exists()){var _user=firebase.auth().currentUser;createNewUser(_user.uid,_user.email)}window.location.href="/"})}})})}function showRegister(){state="register";if(windowWidth>=768){document.getElementById("to_login").style.display="block";document.getElementById("to_register").style.display="none";document.getElementById("login").style.display="none";document.getElementById("register").style.display="block"}else{document.getElementById("to_login_mobile").style.display="block";document.getElementById("to_register_mobile").style.display="none";document.getElementById("login").style.display="none";document.getElementById("register").style.display="block"}}function showLogin(){state="login";if(windowWidth>=768){document.getElementById("to_register").style.display="block";document.getElementById("to_login").style.display="none";document.getElementById("register").style.display="none";document.getElementById("login").style.display="block"}else{document.getElementById("to_register_mobile").style.display="block";document.getElementById("to_login_mobile").style.display="none";document.getElementById("register").style.display="none";document.getElementById("login").style.display="block"}}function register(email,password,password2){var err=!1;if(password===password2){firebase.auth().createUserWithEmailAndPassword(email,password)["catch"](function(error){var errorCode=error.code;var errorMessage=error.message;window.alert("ERROR! Code: "+errorCode+"\nInfo: "+errorMessage);showRegister();err=!0})}else{window.alert("ERROR! Passwords do not match.");err=!0}if(!err){firebase.auth().onAuthStateChanged(function(user){if(user){user.sendEmailVerification().then(function(){window.alert("Success! An email has been sent to "+email+" Please confirm your email to access all features.");showLogin();window.location.href="/"})["catch"](function(error){var errorCode=error.code;var errorMessage=error.message;window.alert("ERROR! Code: "+errorCode+"\nInfo: "+errorMessage)});createNewUser(user.uid,user.email)}})}}function createNewUser(userId,email){firebase.database().ref("users/"+userId).set({uid:userId,email:email,ratings:{}})}function logout(){firebase.auth().signOut()}function login(email,password){var err=!1;firebase.auth().signInWithEmailAndPassword(email,password)["catch"](function(error){var errorCode=error.code;var errorMessage=error.message;window.alert("ERROR! Code: "+errorCode+"\nInfo: "+errorMessage);err=!0}).then(function(){if(!err){window.location.href="/"}})}function main(){Array.from(document.getElementsByClassName("switchButton")).forEach(function(self){self.addEventListener("click",function(){if(state==="login"){showRegister()}else{showLogin()}})});document.getElementById("register_button").addEventListener("click",function(){var info=[document.getElementById("register_email").value,document.getElementById("register_password").value,document.getElementById("register_password_confirm").value];register.apply(void 0,info)});document.getElementById("login_button").addEventListener("click",function(){var info=[document.getElementById("login_email").value,document.getElementById("login_password").value];login.apply(void 0,info)});document.getElementById("login_google").addEventListener("click",function(){googleSignin()});document.getElementById("register_password_confirm").addEventListener("keydown",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("register_button").click()}});document.getElementById("login_password").addEventListener("keydown",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("login_button").click()}});if(windowWidth<768){document.getElementsByClassName("authChange")[0].style.display="none";document.getElementById("mobileAuthChange").style.display="block"}}main();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2xvZ2luLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJnb29nbGVTaWduaW4iLCJlcnIiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlcklkIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJkYXRhYmFzZSIsInJlZiIsIm9uY2UiLCJzbmFwc2hvdCIsImV4aXN0cyIsImNyZWF0ZU5ld1VzZXIiLCJlbWFpbCIsImxvY2F0aW9uIiwiaHJlZiIsInNob3dSZWdpc3RlciIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0xvZ2luIiwicmVnaXN0ZXIiLCJwYXNzd29yZCIsInBhc3N3b3JkMiIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNldCIsInJhdGluZ3MiLCJsb2dvdXQiLCJzaWduT3V0IiwibG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIm1haW4iLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5mbyIsInZhbHVlIiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJjbGljayJdLCJtYXBwaW5ncyI6ImFBcUJBLEdBQUlBLENBQUFBLEtBQUssQ0FBRyxPQUFaLENBQ0Es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QUFnQixDQUM3RixHQUFJQSxLQUFLLENBQUNDLE9BQU4sR0FBa0IsRUFBdEIsQ0FBMEIsQ0FDdEJELEtBQUssQ0FBQ0UsY0FBTixHQUNBMUQsUUFBUSxDQUFDZ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkMyQixLQUEzQyxFQUNILENBQ0osQ0FMRCxFQU9BM0QsUUFBUSxDQUFDZ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENxQixnQkFBMUMsQ0FBMkQsU0FBM0QsQ0FBc0UsU0FBU0csS0FBVCxDQUFnQixDQUNsRixHQUFJQSxLQUFLLENBQUNDLE9BQU4sR0FBa0IsRUFBdEIsQ0FBMEIsQ0FDdEJELEtBQUssQ0FBQ0UsY0FBTixHQUNBMUQsUUFBUSxDQUFDZ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QzJCLEtBQXhDLEVBQ0gsQ0FDSixDQUxELEVBT0EsR0FBSTlELFdBQVcsQ0FBRyxHQUFsQixDQUF1QixDQUNuQkcsUUFBUSxDQUFDa0Qsc0JBQVQsQ0FBZ0MsWUFBaEMsRUFBOEMsQ0FBOUMsRUFBaURqQixLQUFqRCxDQUF1REMsT0FBdkQsQ0FBaUUsTUFBakUsQ0FDQWxDLFFBQVEsQ0FBQ2dDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxLQUE1QyxDQUFrREMsT0FBbEQsQ0FBNEQsT0FDL0QsQ0FDSixDQUVEYSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLypcblx0S0sgQ2FiaW5ldHNcbiAgICBDb3B5cmlnaHQgKEMpIDIwMjAgIEx1a2UgWmhhbmcsIEV0aGFuIExpbVxuICAgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9MdWtlLXpoYW5nLTA0XG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2V0aGFubGltMDRcblxuICAgIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICAgIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAgICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiovXG5cbmxldCBzdGF0ZSA9IFwibG9naW5cIlxubGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKClcbmxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxuXG4vL2F1dGggc3RhdGUgY2hhbmdlZFxuZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbih1c2VyKSB7XG4gICAgLy9sZXQgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlclxuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIsIHVzZXIucHJvdmlkZXJEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIHVzZXIgaXMgc2lnbmVkIGluLlxuICAgIH1cbn0pXG5cbi8vc2lnbiBpbiB3aXRoIGdvb2dsZVxuZnVuY3Rpb24gZ29vZ2xlU2lnbmluKCkge1xuICAgIGxldCBlcnIgPSBmYWxzZVxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7IC8vc2lnbiBpbiB3aXRoIHBvcHVsXG4gICAgICAgIGxldCB0b2tlbiA9IHJlc3VsdC5jcmVkZW50aWFsLmFjY2Vzc1Rva2VuXG4gICAgICAgIGxldCB1c2VyID0gcmVzdWx0LnVzZXJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4sIHVzZXIpXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHsgLy9hbGVydCBlcnJvclxuICAgICAgIGxldCBlcnJvckNvZGUgPSBlcnJvci5jb2RlXG4gICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcbiAgICAgICB3aW5kb3cuYWxlcnQoXCJFUlJPUiEgQ29kZTogXCIgKyBlcnJvckNvZGUgKyBcIlxcbkluZm86IFwiICsgZXJyb3JNZXNzYWdlKVxuICAgICAgIGVyciA9IHRydWVcbiAgICB9KS50aGVuKF8gPT4ge1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgIGlmICh1c2VyICYmICFlcnIpIHsgLy9pZiBwcm9wZXJseSBzaWduZWQgaW4vcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgIHZhciB1c2VySWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkKS5vbmNlKFwidmFsdWVcIikudGhlbihmdW5jdGlvbihzbmFwc2hvdCkgeyAvL3RyeSBhbmQgZ2V0IHVzZXIgaW5mbyBmcm9tIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgIGlmICghc25hcHNob3QuZXhpc3RzKCkpIHsgLy9pZiB1c2VyIGRvZXNuXCJ0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1VzZXIodXNlci51aWQsIHVzZXIuZW1haWwpIC8vY3JlYXRlIGEgbmV3IHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIudWlkLCB1c2VyLmVtYWlsLCB1c2VyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIgLy9yZWRpcmVjdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vIHVzZXIgaXMgc2lnbmVkIGluLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8vc2hvdyByZWdpc3RlciBmb3Jtc1xuZnVuY3Rpb24gc2hvd1JlZ2lzdGVyKCkge1xuICAgIHN0YXRlID0gXCJyZWdpc3RlclwiXG4gICAgXG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDc2OCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX2xvZ2luXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b19yZWdpc3RlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX2xvZ2luX21vYmlsZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fcmVnaXN0ZXJfbW9iaWxlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cbn1cblxuLy9zaG93IGxvZ2luIGZvcm1zXG5mdW5jdGlvbiBzaG93TG9naW4oKSB7XG4gICAgc3RhdGUgPSBcImxvZ2luXCJcbiAgICBpZiAod2luZG93V2lkdGggPj0gNzY4KSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fcmVnaXN0ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX2xvZ2luXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fcmVnaXN0ZXJfbW9iaWxlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b19sb2dpbl9tb2JpbGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfVxufVxuXG4vL3JlZ2lzdGVyIG5ldyB1c2Vyc1xuZnVuY3Rpb24gcmVnaXN0ZXIoZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIpIHtcbiAgICBsZXQgZXJyID0gZmFsc2VcblxuICAgIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmQyKSB7IC8vaWYgcGFzc3dvcmRzIG1hdGNoXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS5jYXRjaChmdW5jdGlvbihlcnJvcikgeyAvL2NyZWF0ZSBuZXcgdXNlclxuICAgICAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGVcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFUlJPUiEgQ29kZTogXCIgKyBlcnJvckNvZGUgKyBcIlxcbkluZm86IFwiICsgZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgc2hvd1JlZ2lzdGVyKClcbiAgICAgICAgICAgIGVyciA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWxlcnQoXCJFUlJPUiEgUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIilcbiAgICAgICAgZXJyID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICghZXJyKSB7IC8vaWYgbm8gZXJyb3JzXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7IC8vaWYgc3VjY2Vzcywgc2VuZCB2ZXJpZmljYXRpb24gZW1haWxcbiAgICAgICAgICAgICAgICAvL2xldCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIsIHVzZXIucHJvdmlkZXJEYXRhKVxuXG4gICAgICAgICAgICAgICAgdXNlci5zZW5kRW1haWxWZXJpZmljYXRpb24oKS50aGVuKGZ1bmN0aW9uKCkgeyAvL3NlbmQgdmVyaWZpY2F0aW9uIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlN1Y2Nlc3MhIEFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gXCIgKyBlbWFpbCArIFwiIFBsZWFzZSBjb25maXJtIHlvdXIgZW1haWwgdG8gYWNjZXNzIGFsbCBmZWF0dXJlcy5cIilcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvZ2luKClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFUlJPUiEgQ29kZTogXCIgKyBlcnJvckNvZGUgKyBcIlxcbkluZm86IFwiICsgZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdVc2VyKHVzZXIudWlkLCB1c2VyLmVtYWlsKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vL2NyZWF0ZSBhIG5ldyB1c2VyXG5mdW5jdGlvbiBjcmVhdGVOZXdVc2VyKHVzZXJJZCwgZW1haWwpIHtcbiAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcInVzZXJzL1wiICsgdXNlcklkKS5zZXQoe1xuICAgICAgdWlkOiB1c2VySWQsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICByYXRpbmdzOiB7fVxuICAgIH0pXG59XG5cbi8vbG9nb3V0IHVzZXJcbmZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xuICAgIGNvbnNvbGUubG9nKFwic3VjY2VzZnVsbHkgb3V0XCIpXG59XG5cbi8vbG9nIGEgdXNlciBpblxuZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgbGV0IGVyciA9IGZhbHNlXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHsgLy9zaWduIGluIHdpdGggZW1haWwgYW5kIHBzd3JkXG4gICAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlXG4gICAgICAgIHdpbmRvdy5hbGVydChcIkVSUk9SISBDb2RlOiBcIiArIGVycm9yQ29kZSArIFwiXFxuSW5mbzogXCIgKyBlcnJvck1lc3NhZ2UpXG4gICAgICAgIGVyciA9IHRydWVcbiAgICB9KS50aGVuKF8gPT4ge1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIiAvL3JlZGlyZWN0XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIC8vc2V0IGJ1dHRvbnMgZm9yIHJlZ3Jpc3RyYXRpb24gYW5kIGxvZ2luIGNoYW5naW5nXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3dpdGNoQnV0dG9uXCIpKS5mb3JFYWNoKHNlbGYgPT4ge1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gXCJsb2dpblwiKSB7XG4gICAgICAgICAgICAgICAgc2hvd1JlZ2lzdGVyKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0xvZ2luKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy9yZWdyaXN0cmF0aW9uIGJ1dHRvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJfYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdGVyX2VtYWlsXCIpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3Rlcl9wYXNzd29yZFwiKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJfcGFzc3dvcmRfY29uZmlybVwiKS52YWx1ZVxuICAgICAgICBdXG4gICAgICAgIHJlZ2lzdGVyKC4uLmluZm8pXG4gICAgfSlcblxuICAgIC8vbG9naW4gYnV0dG9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbl9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF8gPT4ge1xuICAgICAgICBsZXQgaW5mbyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fZW1haWxcIikudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luX3Bhc3N3b3JkXCIpLnZhbHVlLFxuICAgICAgICBdXG4gICAgICAgIGxvZ2luKC4uLmluZm8pXG4gICAgfSlcblxuICAgIC8vZ29vZ2xlIGxvZ2luIGJ1dHRvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fZ29vZ2xlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfID0+IHtcbiAgICAgICAgZ29vZ2xlU2lnbmluKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3Rlcl9wYXNzd29yZF9jb25maXJtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3Rlcl9idXR0b25cIikuY2xpY2soKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fcGFzc3dvcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luX2J1dHRvblwiKS5jbGljaygpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY4KSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRoQ2hhbmdlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZUF1dGhDaGFuZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cbn1cblxubWFpbigpIl19