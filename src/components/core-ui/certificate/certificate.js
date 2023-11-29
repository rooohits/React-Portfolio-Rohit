import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { HiExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import { ThemeContext } from "../../../contexts/theme-context";
import { certificateData } from "../../../data/certificateData";
import "./certificate.css";

const Certificate = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    infinite: true,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1, // Display 1 card at a time on smaller screens
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 5 }}>
      <div className='certificate-header'>
        <h1
          style={{
            color: theme.primary,
          }}>
          Certificates
        </h1>
      </div>
      <Slider className="cert-slider" {...settings}>
        {certificateData.map((item) => (
          <Card className="cert-card" key={item.id} sx={{ height: { xs: 320, sm: 480 } }}>
            <CardActionArea>
              <CardMedia
                component='img'
                sx={{
                  height: { xs: 270, sm: 420 },
                  borderBottom: "1px solid #f5f5f5",
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "1", // Added to ensure CardContent takes available space
                }}>
                <Typography>{item.title}</Typography>
                <IconButton>
                  <Link href={item.link}>
                    <HiExternalLink />
                  </Link>
                </IconButton>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Certificate;