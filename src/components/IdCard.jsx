function IdCard(props) {
    console.log(props)
    return ( <div>
        <img src={props.information.picture}/>        
        <p>First name : {props.information.firstName}</p>
        <p>Last name : {props.information.lastName}</p>
        <p>First name : {props.information.gender}</p>
        <p>Height : {props.information.height}</p>
        <p>Birth : {props.information.birth}</p>
        </div> );
}

export default IdCard;