import React, { useState, useEffect, useRef } from 'react';
import '../Assets/Css/Portfolio.css';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getVideosByCategory, getVideosByRealEstate } from '../Redux/Actions/Design';
import { Pagination } from "@mui/material";

const VideoUpload = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('Video Ads & Animation');
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(4);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [categories, setCategories] = useState('');
    const [selectedCate, setSelectedCate] = useState('Real Estate');
    const [pageReal, setPageReal] = useState(1);
    const [sizeReal, setSizeReal] = useState(4);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const { videos, loading, error, totalRealPages, totalPages, realEstate, category, realCategory } = useSelector((state) => state.designData);

    useEffect(() => {
        dispatch(getVideosByCategory(selectedCategory, page, size));
    }, [dispatch, selectedCategory, page, size]);

    useEffect(() => {
        dispatch(getVideosByRealEstate(selectedCate, pageReal, sizeReal));
    }, [dispatch, selectedCate, pageReal, sizeReal]);

    const handleClose = () => {
        setSelectedVideo(null);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
        dispatch(getVideosByCategory(selectedCategory, value, size));
    };

    const handlePageChange = (event, value) => {
        setPageReal(value);
        dispatch(getVideosByRealEstate(selectedCate, value, sizeReal));
    };

    const handleVideoShow = (video, data) => {
        setSelectedVideo(video?.url);
        setCategories(data);
    };

    const handleVideoData = (event) => {
        props?.onDataReceive(event);
    };

    return (
        <div className="video-upload-container">
            {localStorage.getItem('status') === 'true' && (
                <div>
                    <Button
                        variant="outlined"
                        className='branding-btn'
                        onClick={() => fileInputRef.current.click()}
                    >
                        Choose Video
                    </Button>
                    <input
                        hidden
                        accept="video/*"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleVideoData}
                    />
                </div>
            )}
            <div className="video-desn">{selectedCate}</div>
            <div className='row'>
                {realEstate?.map((ele) => (
                    <div key={ele?.id} className="col-3 col-sm-12 col-md-6 col-lg-3 video-upload-part" onClick={() => handleVideoShow(ele, realCategory)}>
                        <video width="100%" height="auto" className='video-style' controls disabled>
                            <source src={ele?.url} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
            <div className="m-3 d-flex justify-content-end">
                <Pagination
                    count={totalRealPages}
                    page={pageReal}
                    onChange={handlePageChange}
                />
            </div>
            <div className="video-desn">{selectedCategory}</div>
            <div className='row'>
                {videos?.map((video) => (
                    <div key={video?.id} className="col-3 col-sm-12 col-md-6 col-lg-3 video-upload-part" onClick={() => handleVideoShow(video, category)}>
                        <video width="100%" height="auto" className='video-style' controls disabled>
                            <source src={video?.url} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
            <div className="m-3 d-flex justify-content-end">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
            <Modal show={!!selectedVideo} onHide={handleClose} size="lg">
                <Modal.Body>
                    {selectedVideo && (
                        <video width="100%" height="auto" controls className='model-video'>
                            <source src={selectedVideo} type="video/mp4" />
                        </video>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default VideoUpload;