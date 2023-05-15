function Search(){
    return( <form className="search-form d-flex" action="#">
    <i className="icon-search" />
    <input
      type="search"
      className="form-control"
      placeholder="Search Here"
      title="Search here"
    />
    <button className="btn btn-primary btn-icon-text">
      Tìm kiếm
    </button>
  </form>)
}
export default Search;