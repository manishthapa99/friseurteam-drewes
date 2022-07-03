import './OurTeam.css'

function Card(props){
    return(
    <div>
        <div className="card">
          <img src={props.img} className="class__img"/>
        </div>
        <div className="detail">
          <p className="brand"><b>{props.description}</b></p>
          <div style={{ borderTop: "3px solid #C8B170 ", marginLeft: 80, marginRight: 80 ,marginBottom:8}}/>  
          <h2 className="title">{props.title}</h2>
          
        </div>
    </div>
    
    )
  }


function OurTeam(){
    return(
        <div className="team_wrapper">
            <Card
                img="/assets/MichaelaDrewes.jpg"
                title="A beautiful woman should break her mirror early."
                description="Michaela Drewes"
                />
            <Card
                img="/assets/TamaraRossberg.jpg"
                title="A beautiful woman should break her mirror early."
                description="Tamara Rossberg"
                />
            <Card
                img="/assets/ThelkaKok.jpg"
                title="A beautiful woman should break her mirror early."
                description="Thelka Kok"
                />
            <Card
                img="/assets/VanessaGarbade.jpg"
                title="A beautiful woman should break her mirror early."
                description="Vanessa Garbade"
                />
            <Card
                img="/assets/5.jpg"
                title="A beautiful woman should break her mirror early."
                description="Vanessa Garbade"
                />
            <Card
                img="/assets/6.jpg"
                title="A beautiful woman should break her mirror early."
                description="Vanessa Garbade"
                />
        </div>
    )
}

export default OurTeam;  