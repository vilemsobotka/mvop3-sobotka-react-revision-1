function CardDinamic(props)
{
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href={props.linkurl}>{props.link}</a>
        </div>
    );
}
export default CardDinamic;