import MetricCard from "./MetricCard"

export const ContentRowMovies = () => {
    const metrics = [
        {
            title: "Movies in Data Base",
            color: "primary",
            value: 21,
            icono: "fa-film"
        },
        {
            title: "Total awards",
            color: "success",
            value: 79,
            icono: "fa-award"
        }, 
        {
            title: "Actors quantity",
           color: "warning",
            value: 49,
            icono: "fa-user"
        },
    ]
    return (
        <div className="row">
{
         metrics.map((metric, i) => < MetricCard key={metric.title + i} metric={metric} />)
        }
        
        </div>
    )
}



