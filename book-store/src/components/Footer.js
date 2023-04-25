import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <p>© 2023 BookBazaar | All Rights Reserved.</p>
            <div className="links">
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />
                <YouTubeIcon />
            </div>
        </div>
    </>
  )
}

export default Footer