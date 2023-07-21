import React, {useState} from 'react'

export default function BeerCreator(){
    const [beer, setBeer] = useState ({name: "", alcohol: 0, price: 0 });
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const {name, value} =event.target;
        setBeer((prevBeer) => ({...prevBeer, [name]: value}))
        // setBeer({...beer, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/addbeer', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(beer)
            });
            setMessage("Beer successfully added!")       

        }catch(error){
            setMessage("An error happend!") 
        }
    }

    return (
        <div>
            { message != "" ? <h1>{message}</h1> : null }
            <h2>add new beer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={beer.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Alcohol</label>
                    <input
                        type="number"
                        name="alcohol"
                        value={beer.alcohol}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={beer.price}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>new beer</button>
            </form>
        </div>
    );


}