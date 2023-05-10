function Greetings({children, lang}) {
    let greeting =  ""
    lang === "de" ? greeting = "Hallo" :
    lang === "en" ? greeting = "Hello" :
    lang === "es" ? greeting = "Hola" :
    lang === "fr" ? greeting = "Bonjour" :
    greeting = "not valid languge"

    return ( <div>
        <p>{greeting} {children}</p>
        </div> )
}

export default Greetings;