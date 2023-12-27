
const VideoCard = ({cardDetails}) => {

    
  return (
    <div className="video_card">
        <video poster={cardDetails.videothumbnail}  controls="controls" />
      <div className="card_description">
        <div>
        <img src={cardDetails.avatar} alt="channel logo" />   
       </div> 
        <div className="details_frame">
          <div className="video_title">{cardDetails.title}</div>
          <div className="video_stamp">
            <div>{cardDetails.author}</div>
            <div>
              {cardDetails.views} views - {cardDetails.datePosted}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default VideoCard
