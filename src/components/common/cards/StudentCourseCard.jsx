import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function StudentCourseCard({ sx, data,onDone }) {
  const cardImage =
    "https://ik.imagekit.io/bbnngj9wy/pretty-girl-group-young-people-casual-clothes-working-modern-office_146671-16507_8Wqe_zmIY.avif";
  return (
    <Card sx={{ maxWidth: 545, ...sx }} className="student-card">
      <CardMedia sx={{ height: 140 }} image={cardImage} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration : {data?.duration}{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Mark : {data?.maxMark}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cutt-off Score : {data?.cuttOffScore}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Question : {data?.questionNo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Test Timing : {data?.testTiming} Minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onDone(data)}>Start Test</Button>
      </CardActions>
    </Card>
  );
}
