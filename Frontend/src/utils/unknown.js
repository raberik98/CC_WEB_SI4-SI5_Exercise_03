export default function unknown() {
    setInterval(() => {
        fetch("http://localhost:3001/").then((resp) => {
            resp.text().then(data => console.log(data)) 
        } )
    },500)
   
}