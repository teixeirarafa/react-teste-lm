import React from 'react';

/**
 * Esse componente serve de Footer da página.
 */
const Footer = props => {
 return(
    <footer className="footer mt-4">
    <div className="row d-flex">
      <code className="text-danger h2 mx-1 pl-3">&#x2B22;</code>
      <small id="text-logo" className="text-white mr-3" >UX</small>
      <div className="col-11 px-0">
        <div className="d-flex justify-content-between">
          <small className="font-weight-bold text-dark pt-2">The UX Library</small>
          <small>
          <i className="fab fa-facebook text-info fa-lg mr-2"></i>Facebook
          <i className="fab fa-twitter-square text-primary fa-lg mx-2"></i>Twitter
          <code className="text-secondary ml-2 mx-1 h4">&bull;</code>
          <button type="button" className="btn btn-link btn-sm text-danger py-0">About</button>
          <button type="button" className="btn btn-link btn-sm text-danger py-0">Contact</button>
          <button type="button" className="btn btn-link btn-sm text-danger py-0">Sign in</button>
          </small>					  
        </div>
        <div className="d-flex w-100 justify-content-between">
          <small className="mb-1 text-secondary">Community curated design content & discussion</small>
          <small className="mb-1 text-secondary"><code className="text-secondary mx-1 h6">&copy;</code>2014 - The UX Library</small>					  
        </div>
      </div>
    </div>
  </footer>
 )
}
export default Footer