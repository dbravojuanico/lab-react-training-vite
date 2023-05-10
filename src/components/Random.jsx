function Random(props) {
    console.log(props)
    return ( <div>
        <p>{props.min + Math.floor(Math.random() * props.max)}</p>
        </div> );
}

export default Random;