import React from 'react'
import PropTypes from 'prop-types';

const BlurBlob = ({position, size}) => {

    // // Calculate the position and size of the blob based on the position and size props
    // const top = position.top - size.height / 2;
    // const left = position.left - size.width / 2;
    // const width = size.width;
    // const height = size.height;

    const {top, left} = position;
    const {width, height} = size;

  return (
    <div
    className='absolute'
    style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
    }}>
      
      <div className='w-full h-full bg-[#9929EA] rounded-full opacity-20 blur-3xl animate-blob'></div>
    </div>
  )
}

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }).isRequired,
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }).isRequired,
}

export default BlurBlob
