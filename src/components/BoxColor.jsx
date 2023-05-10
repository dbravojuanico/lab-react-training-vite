function BoxColor({r, g, b}) {
    console.log(r)
    return ( 
    <div style={{backgroundColor: `rgb(${r},${g},${b})`}}>
<p>rgb({r},{g},{b})</p>        
</div> )
}

export default BoxColor;