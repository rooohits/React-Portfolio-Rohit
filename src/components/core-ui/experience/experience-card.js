import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import expImgBlack from "../../../assets/svg/experience/expImgBlack.svg";
import expImgWhite from "../../../assets/svg/experience/expImgWhite.svg";
import { ThemeContext } from "../../../contexts/theme-context";
import "./experience.css";
import celebal from "../../../assets/assets/celebal.png";
import { IconButton } from "@mui/material";
import { HiExternalLink } from "react-icons/hi";
import pdfLink from '../../../assets/assets/pdf/Celebal.pdf'

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.quaternary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    //   justifyContent: "space-between",
      padding: "1rem", // Add padding to create space around items
      position: 'relative',
    },
    expcardImg: {
      borderRadius: "50%",
      width: "36px",
      height: "36px",
      marginRight: "1rem",
    },
    additionalImg: {
      marginLeft: "1rem",
      width: "90%",
      height: "10%",
    },
    linkIcon: {
        cursor: 'pointer',
        marginLeft: '1rem',
        width: '60px',
        height: '60px',
      },
  }));

  const classes = useStyles();

  const handleLinkClick = () => {
    window.open(pdfLink, '_blank');
  };

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.tertiary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary }}>{company}</h5>
        </div>
        <div className="exp-image">
          <img className={`image ${classes.additionalImg}`} src={celebal} alt="" />
        </div>
        <IconButton className= {classes.linkIcon} onClick={handleLinkClick}>
          <HiExternalLink className="link-btn" style={{ color: '#1976D2' }} />
        </IconButton>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
