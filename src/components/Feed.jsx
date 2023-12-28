import VideoCard from './VideoCard'
import VideoThumbnail1 from '../assets/videoThumbnail1.jpg'
import VideoThumbnail2 from '../assets/videoThumbnail2.jpg'
import VideoThumbnail3 from '../assets/videoThumbnail3.jpg'
import DesignCode from '../assets/DesignCodeLogo.svg'
import Figma from '../assets/FigmaLogo.svg'
import Sketch from '../assets/SketchLogo.svg'
import Spline from '../assets/SplineLogo.svg'

const Feed = () => {
  const cardDetails = [
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail1,
      avatar: DesignCode,
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      author: 'DESIGNCODE',
      views: '14k',
      datePosted: '1 month ago'
    },
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail2,
      avatar: Spline,
      title: 'Create 3D Site with Spline and React - Full Course',
      author: 'CHANNEL NAME',
      views: '14k',
      datePosted: '1 month ago'
    },
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail3,
      avatar: Sketch,
      title: 'How to Use AI Art Generator on Midjourney',
      author: 'MIDJOURNEY ART',
      views: '14k',
      datePosted: '1 month ago'
    },
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail1,
      avatar: Figma,
      title: 'Desktop App UI Design in Figma - Full Course',
      author: 'CHANNEL NAME',
      views: '14k',
      datePosted: '1 month ago'
    },
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail2,
      avatar: Sketch,
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      author: 'CHANNEL NAME',
      views: '14k',
      datePosted: '1 month ago'
    },
    {
      videosource: "https://www.youtube.com/watch?v=aAGJ1MNkn6cimage1",
      videothumbnail: VideoThumbnail3,
      avatar: DesignCode,
      title: 'Build a 3D Site Without Code with Framer - Crash Course',
      author: 'DESIGNCODE',
      views: '14k',
      datePosted: '1 month ago'
    }
  ]
  return (
    <div className="feed">
      {
        cardDetails.map(detail => 
          <VideoCard cardDetails={detail}/>
          )

      }
    </div>
  )
}

export default Feed
