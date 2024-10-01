import React, { useRef, useState, useEffect } from "react";
import '../Assets/Css/Portfolio.css';
import Branding1 from '../Assets/Images/branding1.jpg';
import Typography1 from '../Assets/Images/typography2.jpg';
import { connect, useDispatch } from 'react-redux';
import {
    uploadBranding, createDesignStatus, createDesignErrorStatus, getDesignList,
    uploadVideo, createVideoStatus, createVideoErrorStatus, getVideosByRealEstate, getVideosByCategory
} from '../Redux/Actions/Design';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import VideoGallery from '../Components/VideoGallery';

function Portfolio({ isLogin, uploadBranding, isUpload, createDesignStatus, createDesignErrorStatus, isUploaderror,
    uploadVideo, createVideoStatus, createVideoErrorStatus, isVideoUpload, isVideoUploaderror }) {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Branding");
    const [selectedType, setSelectedType] = useState("Real Estate");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [video, setVideo] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const [selectedCate, setSelectedCate] = useState('Real Estate');
    const [pageReal, setPageReal] = useState(0);
    const [sizeReal, setSizeReal] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState('Video Ads & Animation');
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('someProp has changed:', isLogin);
        if (isLogin === true) {
            localStorage.setItem('status', isLogin);
        }
    }, [isLogin]);

    const handleClose = () => {
        setShow(false);
        setSelectedVideo(null);
        setShowVideo(false);
    };

    const portfolioItems = [
        { src: Branding1, value: "Branding", label: "Brandings" },
        { src: Branding1, value: "Social Media Ad", label: "Social Media Ad" },
        { src: Typography1, value: "Creative ads", label: "Creative ads" },
        { src: Branding1, value: "Samurai Restaurant & EasyKlima", label: "Samurai Restaurant & EasyKlima" },
        { src: Branding1, value: "Facebook & Web Ads", label: "Facebook & Web Ads" },
        { src: Branding1, value: "Illustration & Typography", label: "Illustration & Typography" }
        
    ];

    const videoCategory = [
        { src: Branding1, value: "Real Estate", label: "Real Estate" },
        { src: Typography1, value: "Video Ads & Animation", label: "Video Ads & Animation" }
    ];

    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event?.target?.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        setShow(true);
    };

    const onUpload = async (event) => {
        event?.preventDefault();
        if (image) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("category", selectedOption?.value);
            try {
                await uploadBranding(formData);
            } catch (err) {
            }
            setShow(false);
        } else {
            alert("Please select an image to upload.");
        }
    };

    useEffect(() => {
        if (isUpload === true) {
            toast.success('Design Uploaded!', {
                theme: "colored", position: "top-right", autoClose: 5000, hideProgressBar: false,
                closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
            });
            createDesignStatus(false)
            getVideosByCategory(selectedCategory, page, size);
            getVideosByRealEstate(selectedCate, pageReal, sizeReal);
        } else if (isUploaderror === true) {
            createDesignErrorStatus(false)
            toast.error('Design Upload Failed!', {
                theme: "colored", position: "top-right", autoClose: 5000, hideProgressBar: false,
                closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
            });
        }
    }, [isUpload, isUploaderror]);

    const handleDesign = (e, design) => {
        navigate("/portfolio/designs", { state: { design } })
    };

    const handleVideoUpload = (event) => {
        const file = event?.target?.files[0];
        setVideo(file);
        const reader = new FileReader();
        reader.onload = () => {
            setVideoPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        setShowVideo(true);
    };

    const onVideoUpload = async (event) => {
        event?.preventDefault();
        if (video) {
            const formData = new FormData();
            formData.append("file", video);
            formData.append("category", selectedType?.value);
            try {
                await uploadVideo(formData);
                if (selectedType?.value === 'Video Ads & Animation') {
                    dispatch(getVideosByCategory(selectedType?.value, 0, size));
                } else if (selectedType?.value === 'Real Estate') {
                    dispatch(getVideosByRealEstate(selectedType?.value, 0, size));
                }
            } catch (err) {
                console.error("Error uploading video:", err);
            }
            setShowVideo(false);
        } else {
            alert("Please select a video to upload.");
        }
    };
console.log(selectedType?.value)

    useEffect(() => {
        if (isVideoUpload === true) {
            toast.success('Video Uploaded!', {
                theme: "colored", position: "top-right", autoClose: 5000, hideProgressBar: false,
                closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
            });
            createVideoStatus(false)
        } else if (isVideoUploaderror === true) {
            createVideoErrorStatus(false)
            toast.error('Video Upload Failed!', {
                theme: "colored", position: "top-right", autoClose: 5000, hideProgressBar: false,
                closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
            });
        }
    }, [isVideoUpload, isVideoUploaderror]);

    return (
        <>
            <ToastContainer />
            <div className='portfolio-container'>
                <div className='portfolio-heading'>Portfolio</div>
                <div className='mt-1'>
                    <div className='port-desn'>Design</div>
                    {(localStorage?.getItem('status') === 'true') ?
                        <div>
                            <Button
                                variant="outlined"
                                className='branding-btn'
                                onClick={() => fileInputRef.current.click()}
                            >
                                Choose Design
                            </Button>
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                            />
                        </div> : ''}
                    <div className='portfolio-grid'>
                        {portfolioItems?.map((item, index) => (
                            <div
                                key={index}
                                className='portfolio-item'
                                onClick={(e) => handleDesign(e, item.value)}
                            >
                                <img src={item.src} alt={item.value} className='portfolio-img' />
                                <div className='port-txt'>{item.value}</div>
                            </div>
                        ))}
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Design</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={portfolioItems}
                                className="design-select"
                            />
                            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={onUpload}>
                                Upload
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='mt-5'>
                    <div className='port-desn'>Video Works</div>
                    <div>
                        <VideoGallery onDataReceive={handleVideoUpload} />
                    </div>

                    <div className='port-slider'>
                    </div>
                    <Modal show={showVideo} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Video</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Select
                                defaultValue={selectedType}
                                onChange={setSelectedType}
                                options={videoCategory}
                                className="design-select"
                            />
                            {videoPreview && <video width="100%" height="auto" controls>
                                <source src={selectedVideo} type="video/mp4" />
                            </video>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={onVideoUpload}>
                                Upload
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({ designData }) => {
    const { isUpload, error, message, isDesignList, isUploaderror, isVideoUpload, isVideoList, isVideoUploaderror, isLogin } = designData;
    return { isUpload, error, message, isDesignList, isUploaderror, isVideoUpload, isVideoList, isVideoUploaderror, isLogin };
};

export default connect(mapStateToProps, {
    uploadBranding, getDesignList, createDesignStatus, createDesignErrorStatus,
    uploadVideo, createVideoStatus, createVideoErrorStatus
})(Portfolio);
