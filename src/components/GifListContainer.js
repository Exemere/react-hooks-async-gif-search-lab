import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {YOUR_API_KEY
        if (searchTerm !== "") {
            fetch('http://localhost:3000/data')
                .then((response) => response.json())
                .then((data) => {
                    const gifData = data.data.map((gif) => ({
                        id: gif.id,
                        slug: gif.slug,
                        url: gif.images.fixed_height.url,
                    }));
                    setGifs(gifData);
                });
        }
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <GifSearch onSearch={handleSearch} />
            {gifs.length > 0 ? <GifList gifs={gifs} /> : <p>No GIFs to display.</p>}
        </div>
    );
}

export default GifListContainer;
