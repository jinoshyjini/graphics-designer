import React, { useState, useEffect } from "react";
import '../Assets/Css/Brandings.css';
import { connect } from 'react-redux';
import { getDesignList } from '../Redux/Actions/Design';
import { Button, Breadcrumb, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Brandings({ getDesignList, isDesignList }) {
    const location = useLocation();
    const design = location.state?.design;
    const [selectedImage, setSelectedImage] = useState(null);
    const handleShow = (imageUrl) => {
        setSelectedImage(imageUrl);
    }

    useEffect(() => {
        getDesignList(design);
    }, [getDesignList]);

    return (
        <>
            <div className='branding-container'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/graphics-designer">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/graphics-designer/portfolio">Portfolio</Breadcrumb.Item>
                    <Breadcrumb.Item active>{design}</Breadcrumb.Item>
                </Breadcrumb>
                <div className='branding-heading'>{design}</div>
                <div className="branding-grid">
                    {isDesignList?.map((image, index) => (
                        <div className="branding-item">
                            <img
                                key={index}
                                src={image.content}
                                alt={`Design ${index}`}
                                className='branding-image'
                                onClick={() => handleShow(image.content)}
                            />
                        </div>
                    ))}
                </div>
                <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} size="lg" centered>
                    <Modal.Body>
                        <img
                            src={selectedImage}
                            alt="Enlarged Design"
                            className="modal-image"
                            style={{ width: '100%' }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setSelectedImage(null)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

const mapStateToProps = ({ designData }) => {
    const { isDesignList } = designData;
    return { isDesignList };
};

export default connect(mapStateToProps, { getDesignList })(Brandings);
