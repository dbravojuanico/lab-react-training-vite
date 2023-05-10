function CreditCard(props) {
    console.log(props)
   let newNumber = "XXXX XXXX XXXX "+ props.card.number.substr(-4)
    return ( 
    <div style={{backgroundColor: `${props.card.color}`}}>
      <p>{props.card.type}</p>
      <p>{newNumber}</p>
</div> )
}

export default CreditCard;