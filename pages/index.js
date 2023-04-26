import Head from "next/head";
import {useState} from "react";


export default function Home()
{
    
    const [result, setResult] = useState();
    const toSay = "How are you doing?";


async function bbb(event){
    event.preventDefault();
    try{
        const response = await fetch("/api/createText", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            
            body: JSON.stringify({p : toSay}),
    
        });

        const data = await response.json();
        if(response.status !== 200){
            throw data.error || new Error(`reuqest failed with status code ${response.status}`);

        }

        setResult(data.result);
    }catch(error){
        console.error(error);
        alert(error.message);
    }
}

    return (
        <div>
            <Head>
                <title>Guess the message</title>
                
            </Head>

            <main>
                <h2>Guess the message</h2>
                <button onClick={bbb}>Hi</button>
                <div>You said: {toSay}</div>
            <div>Response is:{result}</div>
            
            </main>
        </div>
    );
    
}