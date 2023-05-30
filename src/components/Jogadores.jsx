export default function Jogador(jogador)
{
    return(
        <div>
            <p>Nome: {jogador.apelido}</p>
            <p>Pontuação: {jogador.pontuacao}</p>
            <img src={jogador?.foto.replace('FORMATO','220x220')} width="60px" height="60px"/>
            <p>Escudo: {jogador.escudo}</p>
            <p>Abreviação: {jogador.abreviacao}</p>
            <p>Posição: {jogador.posicao}</p>
            <hr />
        </div>
    )

}



