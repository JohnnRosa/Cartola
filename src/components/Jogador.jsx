import './jogador.css'

export default function Jogador(jogador){
    return(
        <div className="jogador">
            {/* CABEÇALHO */}
            <div className="header">
                <p>{jogador?.apelido}</p>
                <div className="clube">
                    <p>{jogador?.abreviacao}</p>
                    <img src={jogador?.escudo}/>
                </div>
            </div>
            {/* FOTO */}
            <div className="foto">
                <img src={jogador?.foto?.replace('FORMATO','220x220')}/>
            </div>
            {/* INFORMAÇÕES DO JOGADOR */}
            <div className="dados">
                <p>PT {Number(jogador?.pontuacao).toFixed(2)}</p>
                <p>{jogador?.posicao}</p>
            </div>

        </div>
    )
}