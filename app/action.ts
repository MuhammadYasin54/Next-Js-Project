"use server"

const fetchAllNewUsers =async () =>{
    const apiUrl = "https://dummyjson.com/users";
    const res = await fetch(apiUrl);
    const actualData = await res.json();
    console.log("Users: ",actualData);
    return actualData;
}
export {fetchAllNewUsers}