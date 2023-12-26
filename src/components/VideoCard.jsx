import VideoThumbnail2 from '../assets/videoThumbnail1.jpg'
import DesignCode from '../assets/DesignCodeLogo.svg'

const VideoCard = () => {
  const cardDetails = {
    videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
    videothumbnail: VideoThumbnail2,
    avatar: DesignCode,
    title: 'Design and Prototype an App with Play - Full 3-hour Course',
    author: 'DESIGNCODE',
    views: '14k',
    datePosted: '1 month ago'
}
    
  return (
    <div className="video_card">
        <video poster={cardDetails.videothumbnail}  controls="controls" />
      <div className="card_description">
        <div>
        <img src={cardDetails.avatar} alt="Design code logo" />   
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

