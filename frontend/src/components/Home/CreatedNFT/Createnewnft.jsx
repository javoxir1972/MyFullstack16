import React, { useState } from 'react';
import './style.scss';
import img1 from "../../../assets/images/TrendingArt/nft2.png"; // Default image
import antonson from "../../../assets/images/LeaderBoardAva/Antonson.png";

function CreateNewNFT() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [collection, setCollection] = useState('Exboot Collection');
    const [image, setImage] = useState(null); // For NFT and collection preview

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImage(previewUrl); // Update image state for preview and collection
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`NFT Created!\nName: ${name}\nDescription: ${description}\nCollection: ${collection}`);
    };

    return (
        <div className="create-new-nft">
            <h1>Create New NFT</h1>
            <div className="container">
                <div className="form-container">
                    <h2>Upload your NFT</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>File types supported: JPG, PNG, GIF, SVG, MP4</p>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                placeholder="Upload or drag here"
                            />
                        </div>
                        <div id="nftname">
                            <label htmlFor="name">NFT Name</label>
                            <input
                                type="text"
                                placeholder="Name NFT"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div id="description">
                            <label htmlFor="description">NFT Description</label>
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div id="collection">
                            <label htmlFor="collection">Collection</label>
                            <button
                                type="button"
                                onClick={() => setCollection('Exboot Collection')}
                                required
                            >
                                <img
                                    src={image || img1}
                                    alt="Collection Image"
                                    width="40px"
                                    height="40px"
                                />
                                Exboot Collection
                            </button>
                        </div>
                        <button className="create" type="submit">Create</button>
                    </form>
                </div>

                <div className="card-preview">
                    <h5>Preview</h5>
                    <img
                        className="img1"
                        src={image || img1} // Use uploaded image or default
                        alt="NFT Preview"
                        width="456px"
                        height="466px"
                    />
                    <div className="card-art-bottom">
                        <div className="card-art-bottom-left">
                            <h2>{name || 'Exboot #2'}</h2>
                            <h4>Current Bid</h4>
                        </div>
                        <div className="card-art-bottom-right">
                            <div className="left">
                                <img src={antonson} alt="" width="65px" height="65px" />
                                <h6>Antonson</h6>
                            </div>
                            <div className="right">
                                <h5>🔥3.421</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewNFT;
