import SeriesCard from '../seriesCard'

const seriesObj = {
  Figure: 'Figure',
  Card: 'Card',
  Yarn: 'Yarn'
}

const TypeList = () => {
  return (
    <>
      <h3 className="text-center m-5">Tipos</h3>
      <div className="container">
        {Object.entries(seriesObj).map(([type]) => (
          <SeriesCard key={type} name={type} />
        ))}
      </div>
    </>
  )
}

export default TypeList
