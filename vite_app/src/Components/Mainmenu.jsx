// import  { useState, useEffect } from "react";
// import "./MainMenu.css"

// function Mainmenu() {

//     // const top = [
//     //     { id: 1, title: 'All' },
//     //     { id: 2, title: 'Cook Studio' },
//     //     { id: 3, title: 'UX' },
//     //     { id: 4, title: 'Case Study' },
//     //     { id: 5, title: 'Music' },
//     //     { id: 6, title: 'Bnagla Lofi' },
//     //     { id: 7, title: 'Tour' },
//     //     { id: 8, title: 'Saintmartin' },
//     //     { id: 9, title: 'Tech' },
//     //     { id: 10, title: 'iPhone 13' },
//     //     { id: 11, title: 'User Interface Design' },
//     //     { id: 12, title: "Computer.." }
//     // ]

//     // const box = [
//     //     { id: 1, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 2, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-9.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(2).png", para: 'Infinix Note 12                AMOLED Helio G88 SoC!   ' },
//     //     { id: 3, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-10.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 4, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-11.png", elii: "", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 5, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-4.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 6, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-5.png", elii: "", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 7, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-6.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 8, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-7.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 9, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 10, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-1.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 11, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-2.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     //     { id: 12, tbh: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-3.png", elii: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para: 'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita' },
//     // ]

//     const [youtube, setYoutube] = useState([])

//     useEffect(() => {
//         fetch("https://youtube-api-oybw.onrender.com/youtube")
//         .then(res => res.json())
//           .then(youtube => {
//             console.log(youtube);
//             setYoutube(youtube);
//           })
//           .catch((error) => console.error(error));
//         },[]);

//         const [top ,setTop] = useState([])

//         useEffect(() => {
//             fetch("https://youtube-api-oybw.onrender.com/top")
//             .then(res => res.json())
//               .then(top => {
//                 console.log(top);
//                 setTop(top);
//               })
//               .catch((error) => console.error(error));
//             },[]);

//     return (
//         <>
//             <div className="container1">
//                 <div className="topbar">
//                     <div className="search">
//                         <input type="text" name="text" id="text" placeholder="Search" />
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/search.png" alt="" />
//                     </div>
//                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/mic.png" alt="" />
//                     <div className="topicon">
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/create.png" />
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/more.png" />
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/bell.png" />
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png" />
//                     </div>
//                 </div>
//                 <div className="hr"></div>
//                 <div className="cont">
//                     <div className="arrow">
//                         <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/leftBottom.png" alt="" />
//                     </div>
//                     <div className="section3">

//                         {top.map((i) =>
//                             <div key={i.id} className="section3">
//                                 <p className='circle'>{i.title}</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="hr"></div>
//                 <div className="section4">
//                     {/* <div className="icons">
//                 <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png" alt="" />
//                 <div className="ellipse">
//                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png" alt="" />
//                     <p>Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita</p>

//                 </div>
//             </div>
//             <div className="icons">
//                 <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png" alt="" />
//                 <div className="ellipse">
//                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png" alt="" />
//                     <p>Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita</p>

//                 </div>
//             </div> */}
//                     {youtube.map((res) =>
//                     (<div key={res.id} className="icons">
//                         <img src={res.tbh} />
//                         <div className="ellipse">
//                             <img src={res.elii} alt="" />
//                             <p>{res.para}</p>

//                         </div>
//                     </div>)


//                     )}
//                 </div>
//             </div>



//         </>
//     )
// }

// export default Mainmenu

import { useState, useEffect } from "react";
import "./MainMenu.css";

function Mainmenu() {
  const [youtube, setYoutube] = useState([]); // Initialize as empty array for popular videos
  const [top, setTop] = useState([]); // Initialize as empty array for top categories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [searchQuery, setSearchQuery] = useState(""); // State to capture search input
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  // YouTube API key
  const API_KEY = `AIzaSyDT2Z7X9wZNdXiAm5GUGX_lwAIp06UEZcA`;

  // Fetch popular YouTube videos on load
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${API_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube data");
        }
        return res.json();
      })
      .then(data => {
        if (data.items) {
          setYoutube(data.items); // Set popular videos
        } else {
          throw new Error("No items in YouTube response");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Error fetching YouTube data.");
        setLoading(false);
      });
  }, [API_KEY]);

  // Fetch top categories
  useEffect(() => {
    fetch("https://youtube-api-oybw.onrender.com/top")
      .then(res => res.json())
      .then(data => {
        setTop(data);
      })
      .catch(() => {
        setError("Error fetching top categories.");
        setLoading(false);
      });
  }, []);

  // Handle input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search on button click
  const handleSearchClick = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]); // Clear results if query is empty
    } else {
      setLoading(true);
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Failed to fetch search results");
          }
          return res.json();
        })
        .then(data => {
          setSearchResults(data.items || []); // Update search results
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message || "Error fetching search results.");
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container1">
        <div className="topbar">
          <div className="search">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search"
              value={searchQuery} // Controlled input
              onChange={handleSearchChange} // Update state on input change
            />
            <img 
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/search.png" 
              alt="Search Icon"
              onClick={handleSearchClick} // Trigger search on click
            />
          </div>
          <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/mic.png" alt="Microphone" />
          <div className="topicon">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/create.png" alt="Create Icon" />
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/more.png" alt="More Icon" />
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/bell.png" alt="Notification Icon" />
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png" alt="Profile Icon" />
          </div>
        </div>

        <div className="hr"></div>

        {loading ? (
          <div className="loading">Loading...</div> // Loading message
        ) : error ? (
          <div className="error">{error}</div> // Error message
        ) : (
          <>
            <div className="cont">
              <div className="arrow">
                <img 
                  src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/leftBottom.png" 
                  alt="Arrow Icon" 
                />
              </div>
              <div className="section3">
                {top && top.length > 0 ? (
                  top.map((category) => (
                    <div key={category.id} className="category-item">
                      <p className="circle">{category.title}</p>
                    </div>
                  ))
                ) : (
                  <div>No categories available</div>
                )}
              </div>
            </div>

            <div className="hr"></div>

            <div className="section4">
              {/* Display search results if there is a search query */}
              {searchQuery && searchResults.length > 0 ? (
                searchResults.map((video) => (
                  <div key={video.id.videoId} className="icons">
                    <img 
                      src={video.snippet.thumbnails.medium.url} 
                      alt="Video Thumbnail" 
                    />
                    <div className="ellipse">
                      <img src={video.snippet.channelThumbnail} alt="User Icon" />
                      <p>{video.snippet.title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No videos found for "{searchQuery}"</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Mainmenu;

