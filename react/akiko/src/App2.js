import React from 'react';

const Bemvindo = () => {
    
    return( 
        <h2>Bem vindo</h2>
    );
}


const Equipe = (props) => {

    return( 
        <div>
            <p>Nome: {props.nome}</p>
            <Sobre cargo = {props.cargo} idade = {props.idade}/>
            <Social face = {props.face}/>
            <hr></hr>
        </div>
    );
}

const Sobre = (props) =>{
    return(
        <div>
            <p> Cargo: {props.cargo}</p>
            <p> Idade: {props.idade}</p>
        </div>
    )
}

const Social = (props) =>{
    return(
        <div>
            <a href = {props.face} >Facebook</a>
        </div>
    );
}

function App(){
    return(
        <div> 
            <Bemvindo></Bemvindo>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome='Lucas' cargo = 'programador' idade = '29' face = 'www.google.com'/>
            <Equipe nome='Roberto' cargo = 'design' idade = '18'/>
        </div>
    ); 
}

export default App;