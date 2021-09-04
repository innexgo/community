

export type CarouselImage = {
  alt: string,
  src: string,
}

export type CarouselProps = {
  images: CarouselImage[]
}

const Carousel = (props: CarouselProps) =>
  <div id="carouselExampleControls" className="carousel slide border border-primary" data-bs-ride="carousel">
    <div className="carousel-inner bg-secondary" style={{ height: "50vh" }}>{
      props.images.map((img, i) =>
        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
          <img src={img.src} className="d-block mx-auto" style={{ height: "50vh" }} alt={img.alt} />
        </div>
      )
    }</div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

export default Carousel;
