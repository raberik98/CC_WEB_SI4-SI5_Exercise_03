export default function unknown() {
    setInterval(() => {
        fetch("http://localhost:3001/").then((resp) => {
            resp.json().then(data => console.log(data)) 
        } )
    },200)
   
}