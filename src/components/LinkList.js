import React from 'react';
import PropTypes from 'prop-types';

const LinkList = props => {
    const { link, addUpvotes } = props
    const replaceLinkCategory = link.category.replace("_", " ")

    const colorLinkCategory = () => {   
        switch(link.category) {
            case 'product_design':
                return 'badge-success';                
            case 'discussion':
                return 'badge-secondary'               
            case 'ux_ui':
                return 'badge-primary'
            default:
                return 'badge-info'
        }
    }    
    return(
        <div className="row list-group-item d-flex border-0 list-group-item-action mb-3">
            <div className="col-1 btn-group-vertical" role="group" aria-label="vertical button group">
                <button type="button" onClick={() => addUpvotes(link)} className="btn btn-default border text-danger p-0" >
                    <span className="fas fa-angle-up fa-2x"></span>
                </button>
                <button type="button" className="btn btn-default border font-weight-bold">
                    {link.upvotes}
                </button>
            </div>
            <div className="col-10">
                <div className="d-flex w-100">
                    <small className="mb-1 text-secondary">{link.meta.url.toUpperCase()}</small>
                </div>
                <h5 className="mb-1 text-left">{link.meta.title}.</h5>
                <div className="float-left">
                    <span className={"badge badge-pill capitalize py-1 px-2 " + colorLinkCategory() } >{replaceLinkCategory}</span>
                    <small className="text-danger border-left ml-2"><i className="fas fa-user mx-2"></i><u>{link.meta.author}</u></small>
                    <small className="mx-2">3 days ago</small>
                    <code className="text-secondary mr-2 h4">&bull;</code>
                    <small className="text-danger"><i className="fas fa-comment mr-2"></i><u>{link.comments} comments</u></small>
                </div>
            </div>
        </div>
    )
}

LinkList.propTypes = {
    link: PropTypes.object.isRequired,
    addUpvotes: PropTypes.func.isRequired
}

export default LinkList