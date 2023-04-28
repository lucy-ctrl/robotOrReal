import Head from "next/head";
import {useState} from "react";
import {DropDown} from "../components/dropDown";
export default function Home()
{
    
    const [result, setResult] = useState();
    const toSay = "How are you doing?";





    return (
        <div>
            <Head>
                <title>Guess the message</title> 
            </Head>
            <main>
                <DropDown></DropDown>
                <h2>Guess the message</h2>
               
            
            </main>
        </div>
    );
    
}