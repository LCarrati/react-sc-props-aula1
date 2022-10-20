function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.merda} alt={props.textoAlternativoMerda} />
      <h4>{props.tituloMerda}</h4>
    </div>
  );
}

export default CardVideo;
