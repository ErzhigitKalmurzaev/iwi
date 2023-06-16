import React from "react"
import ContentLoader from "react-content-loader"
import './skeleton.scss';

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={280}
    viewBox="0 0 150 280"
    backgroundColor="#1F1B2E"
    foregroundColor="#332D45"
    className="skeleton"
    {...props}
  >
    <rect x="11" y="23" rx="0" ry="0" width="150" height="200" /> 
    <rect x="13" y="231" rx="0" ry="0" width="124" height="16" /> 
    <rect x="15" y="255" rx="0" ry="0" width="77" height="12" />
  </ContentLoader>
)

export default Skeleton;