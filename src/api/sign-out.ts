import Cookies from "js-cookie";

export async function signOut() {
  Cookies.remove('admin')
  
}