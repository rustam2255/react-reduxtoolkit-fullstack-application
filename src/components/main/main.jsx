import { useSelector } from "react-redux"

const Main = () => {

  const {articles} = useSelector(state => state.article)
  return (
    <div className="container">
      <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map(item => (
            <div class="col" key={item.id}>
            <div class="card h-100 shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect> </svg>
              <div class="card-body">
                <p class="card-text fw-bold">{item.title}</p>
                <p class="card-text ">{item.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-success">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                  </div>
                  <small class="text-body-secondary fw-bold">{item.author.username}</small>
                </div>
              </div>
            </div>
          </div>
      ))}
      
      </div>
    </div>
  </div></div>
  )
}

export default Main