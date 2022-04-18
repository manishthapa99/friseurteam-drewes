import './Shop.css'

function Card(props){
    return(
    <div>
        <div className="card">
          <img src={props.img} className="class__img"/>
          <div className="hello">
            <button className="btn">€29,99</button>
          </div>
        </div>
        <div className="detail">
          <p className="brand">{props.description}</p>
          <h2 className="title">{props.title}</h2>
          <div style={{ borderTop: "2px solid #C8B170 ", marginLeft: 80, marginRight: 80 }}/>  
        </div>
    </div>
    
    )
  }


function Shop(){
    return(
        <div className="wrapper">
            <Card
                img="/assets/service1.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/service2.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/service4.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/service4.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/service5.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/service1.png"
                title="Mangala Copper Red"
                description="GLYNT"
                price="45 euros"/>
        </div>
    )
}

export default Shop;  