function WeatherWidget(props){
    return(
        <div>
            <h1>{props.city}</h1>
            <p>{props.temp}</p>
            <h1>{props.isRainy==true ? "წვიმიანი ამინდია" : "მზიანი ამინდია"}</h1>
        </div>
    );
}
export default WeatherWidget;