import React from 'react';
import PropTypes from 'prop-types';
import AnimatedBox from './AnimatedBox';

const MapBox = ({ width = '100%', height = '500px' }) => {
  return (
    <AnimatedBox>
      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14105.822752388314!2d83.8657431!3d27.8879862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995c9bb9045aa61%3A0x87ebd6475cf7a!2sGolden%20Supervision%20Academy!5e0!3m2!1sen!2snp!4v1708701587615!5m2!1sen!2snp"
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full lg:w-[650px]"
        ></iframe>
      </div>
    </AnimatedBox>
  );
};

MapBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default MapBox;
