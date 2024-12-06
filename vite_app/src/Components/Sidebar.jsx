import "./sidebar.css"

function Sidebar(){

    const data = [
        {id:1, img:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png", title:'Nadir On The Top'},
        {id:2, img:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png", title:'Coke Studio Bangla'},
        {id:3, img:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png", title:'MKBHD'},
        {id:4, img:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(3).png", title:'Figma'},
        {id:5, img:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(4).png", title:'ATC Android ToTo'},
    ]

    return (
        <>
       
        <div className="container">
            <div className="sub" >
                 <div className="menu">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/hambarger.png" />
                 </div>
                 <div className="logo">
                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Youtube%20logo.png" />
                 </div>
            </div>

            <div className="section1">
                 <div className="icon">
                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/home.png"/>
                     <p>Home</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/explore.png"/>
                    <p>Explores</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/shorts.png"/>
                    <p>Shorts</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/subscription.png"/>
                    <p>Subscriptions</p>
                 </div>
            </div>
            <div className="line"></div>

            <div className="section1">
                 <div className="icon">
                     <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/library.png"/>
                     <p>Library</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/history.png"/>
                    <p>History</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/your_video.png"/>
                    <p>Your Videos</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/watch_later.png"/>
                    <p>Watch Later</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/liked.png"/>
                    <p>Liked Videos</p>
                 </div>
                 <div className="icon">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/down_arrow.png"/>
                    <p>Show more</p>
                 </div>
            </div>
            <div className="line"></div>
            <div className="subscription">Subscriptions</div>
            <div className="section2">
            {/* <div className="icon2">
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png"/>
                <p>Nadir On The Top</p> */}
                {data.map((detail)=>
                  <div key={detail.id} className="icon2">
                  <img className='' src={detail.img}/>
                  <p className=''>{detail.title}</p>
                    </div>
                )}

            </div>

            </div>


            {/* </div> */}
            
  
    
        
        
        
        
        </>
    )
}

export default Sidebar