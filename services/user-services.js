const userList = () => fetch("http://localhost:3000/users").then(res => res.json());
    
export const userServices = {
    userList
}